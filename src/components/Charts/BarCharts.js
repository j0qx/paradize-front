import {
  Bar,
} from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const BarCharts = () => {
  const dataName = useSelector((state) => state.search.airComponentsNames);
  const dataValues = useSelector((state) => state.search.airComponentsValues);
  const airQualityNote = useSelector((state) => state.search.airQualityNote);

  const data = {
    labels: dataName,
    datasets: [{
      label: "Qualité de l'air de votre position",
      data: dataValues,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      hoverOffset: 12,
      hoverBorderColor: 'rgb(0, 0, 0)',
      borderWidth: 1,
    }],
  };

  return (
    <Bar
      data={data}
      options={
        {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                boxWidth: 40,
                padding: 5,
              },
            },
          },
        }
      }
    />
  );
};

export default BarCharts;
