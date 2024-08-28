import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
        min: 0,
        max: 40000,
        stepSize: 10000,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'This Year',
        data: [10000, 11598, 5000, 20000,30000,4000,10000],
        borderColor: '#1C1C1C', // Red color for dashed line
        backgroundColor: '#1C1C1C',
      },
      {
        label: 'Last Year',
        data: [0, 11598, 20000, 12000,25000,35000,10000],
        borderColor: '#A8C5DA', 
        backgroundColor: '#A8C5DA',
        borderDash: [5, 5], // Dashed line
      },
    ],
  };

  return (
    <div className="relative">
      
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
