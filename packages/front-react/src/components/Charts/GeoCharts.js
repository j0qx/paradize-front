import {
  Doughnut, Pie, Bar, Line,
} from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import style from './GeoCharts.module.scss';

const GeoCharts = () => {
  const dataAPI = useSelector((state) => state.search.apiSettings);
  const labels = dataAPI.map((elem) => elem.checkBoxeName);
  const dataAPiRaw = dataAPI.map((elem) => elem.result.length);
  console.log(dataAPiRaw);
  const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data: dataAPiRaw,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    }],
  };

  return (
    <Doughnut
      onClick={(e) => {
        console.log(e.target);
      }}
      data={data}
    />
  );
};

export default GeoCharts;
