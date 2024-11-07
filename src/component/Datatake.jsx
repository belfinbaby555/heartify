import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

const MyBarChart = ({da}) => {

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['2021-06-03','2021-06-03'],
  datasets: [
    {
      label: '# of Votes',  // This label will still exist in the code but won't display due to legend settings
      data: da.item,
      backgroundColor: 'rgb(220 38 38)',
      borderColor:'rgb(220 38 38)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,  // Hide legend labels
    },
    tooltip: {
      enabled: false,  // Optional: Hide tooltips on hover
    },
  },
  scales: {
    x: {
      type: 'category',
    },
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

return(
  <div>
    <div>{da.name}</div>
    <Bar data={data} options={options} />
  </div>
)}
export default MyBarChart;
