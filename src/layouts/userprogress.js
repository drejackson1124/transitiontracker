import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import React, { useEffect } from "react";
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserProgress = () => {
    const chartId = 'doughnut-chart';

    useEffect(() => {
        return () => {
          const existingChart = Chart.getChart(chartId);
          existingChart && existingChart.destroy();
        };
      }, []);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Voice Depth',
            yAxisID: 'y-axis-voice',
            data: [1],
            borderColor: 'red',
            backgroundColor: 'red'
          },
          {
            label: 'Facial Hair',
            yAxisID: 'y-axis-hair',
            data: [4],
            borderColor: 'blue',
            backgroundColor: 'blue'
          },
          {
            label: 'Body Strength',
            yAxisID: 'y-axis-strength',
            data: [6],
            borderColor: 'green',
            backgroundColor: 'green'
          },
          {
            label: 'Emotional Wellbeing',
            yAxisID: 'y-axis-emotions',
            data: [8],
            borderColor: 'orange',
            backgroundColor: 'orange'
          },
          {
            label: 'Social Life',
            yAxisID: 'y-axis-social',
            data: [5],
            borderColor: 'purple',
            backgroundColor: 'purple'
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            type: 'category',
          },
          y: [
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-voice',
              label: { text: 'Voice Depth', display: true },
              ticks: {
                // Customize the displayed numbers
                stepSize: 1, // Set the step size between labels
                min: 1, // Set the minimum value
                max: 10, // Set the maximum value
              },
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-hair',
              label: { text: 'Facial Hair', display: true },
              ticks: {
                // Customize the displayed numbers
                stepSize: 1, // Set the step size between labels
                min: 1, // Set the minimum value
                max: 10, // Set the maximum value
              },
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-emotions',
                label: { text: 'Emotional Wellbeing', display: true },
                ticks: {
                  // Customize the displayed numbers
                  stepSize: 1, // Set the step size between labels
                  min: 1, // Set the minimum value
                  max: 10, // Set the maximum value
                },
              },
              {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-body',
                label: { text: 'Body Strength', display: true },
                ticks: {
                  // Customize the displayed numbers
                  stepSize: 1, // Set the step size between labels
                  min: 1, // Set the minimum value
                  max: 10, // Set the maximum value
                },
              },
              {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-social',
                label: { text: 'Social Life', display: true },
                ticks: {
                  // Customize the displayed numbers
                  stepSize: 1, // Set the step size between labels
                  min: 1, // Set the minimum value
                  max: 10, // Set the maximum value
                },
              },
            // Add more y-axes as needed
          ],
        },
      };

      return <Line data={data} options={options} />;
}

export default UserProgress;