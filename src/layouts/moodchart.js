import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import helpers from '../helpers/helpers';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
ChartJS.register(ArcElement, Tooltip, Legend);

const MoodChart = (props) => {
  const [loading, setLoading] = useState(true);

  const [chartData, setChartData] = useState({
    labels: ['Happy', 'Sad', 'Angry', 'Neutral'],
    datasets: [
      {
        label: 'Your Mood',
        data: [0, 0, 0, 0],
        backgroundColor: ['#66b266', '#b2b2b2', '#ff6666', '#6666ff'],
        borderColor: ['Black', 'Black', 'Black', 'Black'],
        borderWidth: 3,
      },
    ],
  });

  const updateChartData = async () => {
    try {
      const response = await helpers.moods(props.user.username);

      const moodCounts = Object.entries(response)
      .filter(([key]) => ['angry', 'happy', 'neutral', 'sad'].includes(key))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

      const newChartData = {
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: Object.values(moodCounts),
          },
        ],
      };

      setChartData(newChartData);
      setLoading(false);
    } catch (error) {
      console.error('Error updating chart data:', error);
    }

  };

  const checkIfDataIsZero = (data) => {
    let result = true;
    data.forEach(v => {
      if(v !== 0){
        result = false;
      }
    })

    return result;
  }

  useEffect(() => {
    updateChartData();
  }, [props.user.username, props.updateMoodChart]);

  if(checkIfDataIsZero(chartData.datasets[0].data)){
    return (
      <div className='text-center'>
        {loading ? (
          <ClipLoader color="#6610f2" loading={loading} css={spinnerStyle} size={35} />
        ) : (
          <div>
            <button onClick={() => { props.setShowModal(true) }} className="btn update-history-btn btn-sm purple-bg mb-3" type="button" id="updatemooddm">
              Update your mood
            </button>
            <h6 className='large-text'>You haven't added any moods yet</h6>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div>
        {loading ? (
          <ClipLoader color="#6610f2" loading={loading} css={spinnerStyle} size={35} />
        ) : (
          <Doughnut data={chartData} />
        )}       
      </div>
    )
    // {loading ? (
    //   <ClipLoader color="#6610f2" loading={loading} css={spinnerStyle} size={35} />
    // ) : (
    //   <div>
    //     <button onClick={() => { props.setShowModal(true) }} className="btn update-history-btn btn-sm purple-bg mb-3" type="button" id="updatemooddm">
    //       Update your mood
    //     </button>
    //     <h6 className='large-text'>You haven't added any moods yet</h6>
    //   </div>
    // )}
    // return <Doughnut data={chartData} />;
  }
};

const spinnerStyle = css`
  display: block;
  margin: auto;
`;

export default MoodChart;
