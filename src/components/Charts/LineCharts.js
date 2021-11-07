import {
  Line,
} from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const LineCharts = () => {
  const dataAPI = useSelector((state) => state.search.apiSettings);
  const labels = dataAPI.map((elem) => elem.checkBoxeName);
  const dataAPiRaw = dataAPI.map((elem) => elem.result.length);
  const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data: dataAPiRaw,
      labels,
      backgroundColor: [
        'rgb(157, 189, 178)',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }],
      hoverOffset: 12,
      hoverBorderColor: 'rgb(0, 0, 0)',
      borderWidth: 1,
    }],
  };

  return (
    <Line
      onClick={(e) => {
      }}
      data={data}
    />
  );
};

export default LineCharts;
