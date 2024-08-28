import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Chart1 = () => {
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Linux', 'Mac', 'ios', 'Windows', 'Others'];

 const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [1,2,3,4],
      backgroundColor: '#95A4FC',
    },
    {
      // label: 'Dataset 2',
      data:[5,2,4,7],
      backgroundColor: '#BAEDBD',
    },
  ],
};

 
  return <Bar options={options} data={data} />;
}


export default Chart1;