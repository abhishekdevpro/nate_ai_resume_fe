import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () =>{
 const data = {
  labels: ['United States', 'Maxico', 'Canada', 'Others'],
  datasets: [
    {
      label: '# of Votes',
      data: [38.6,  30.8,22.5, 8.1],
      backgroundColor: [
        '#1C1C1CCC',
        '#B1E3FF',
        '#BAEDBD',
        '#A8C5DA',
        
      ],
      borderColor: [
        '#1C1C1CCC',
        '#B1E3FF',
        '#BAEDBD',
        '#A8C5DA',
      
      ],
      borderWidth: 1,
    },
  ],
};


  return <Pie data={data} />;
}
export default PieChart
