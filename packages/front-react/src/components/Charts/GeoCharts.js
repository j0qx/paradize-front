import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import style from './GeoCharts.module.scss';


const GeoCharts = () => {
  const dataAPI = useSelector((state) => state.search.apiSettings.);
  return (
    <Doughnut data={} />
  );
};

export default GeoCharts;
