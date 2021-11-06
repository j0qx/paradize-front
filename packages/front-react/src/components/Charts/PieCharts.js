import {
  Pie,
} from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const PieCharts = () => {
  const dataAPI = useSelector((state) => state.search.apiSettings);
  const labels = dataAPI.map((elem) => elem.checkBoxeName);
  const dataAPiRaw = dataAPI.map((elem) => elem.result.length);
  const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data: dataAPiRaw,
      backgroundColor: [
        'rgb(255, 104, 0)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 0, 0)',
        'rgb(157, 189, 178)',
        'rgb(33, 255, 151)',
      ],
      hoverOffset: 12,
      hoverBorderColor: 'rgb(0, 0, 0)',
    }],
  };

  return (
    <Pie
      onClick={(e) => {
      }}
      data={data}
    />
  );
};

export default PieCharts;
