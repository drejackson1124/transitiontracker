import React from 'react';
// import { Chart } from 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Happy', 'Angry', 'Sad', 'Neutral'],
    datasets: [
      {
        label: 'Your Mood',
        data: [12, 19, 3, 10],
        backgroundColor: [
          '#66b266', //green
          '#ff6666', //red
          '#b2b2b2', //grey
          '#6666ff', //blue
        ],
        borderColor: [
          'Black',
          'Black',
          'Black',
          'Black',
        ],
        borderWidth: 3,
      },
    ],
  };

const MoodChart = (props) => {
    return (
        <Doughnut data={data}/>
    )

}

export default MoodChart;