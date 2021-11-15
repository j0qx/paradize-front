/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import style from './BoardDatas.module.scss';

import Dougnut from '../../components/Charts/Dougnut';
import Pie from '../../components/Charts/PieCharts';
import Bar from '../../components/Charts/BarCharts';
import Line from '../../components/Charts/LineCharts';
import getAllCheckedCheckboxs from '../../store/selectors/getAllCheckedCheckboxs';

const BoardDatas = () => {
  const allCheckboxs = useSelector((state) => state.search.apiSettings);
  // const Troubles = () => (

  // );
  return (
  // Two div of graphic percent and 4 fake div to simulate futurs graphics.
    <div className={style.boarddatas_container}>
      <div className={style.boarddatas_container__list}>

        <div className={style.boarddatas_container__list__dougnut}>
          {
        getAllCheckedCheckboxs(allCheckboxs).length > 0 ? <Dougnut />
          : <div><p className={style.oops}>OOPS!</p><p className={style.oops}>Vous n'avez rien selectionner dans les critères.</p></div>
        }
        </div>

        {/* <div className={style.boarddatas_container__list__pie}>
        <Pie />
      </div>
      <div className={style.boarddatas_container__list__line}>
        <Line />
      </div> */}

        <div className={style.boarddatas_container__list__bar}>
          {
        getAllCheckedCheckboxs(allCheckboxs).length > 0 && <Bar />
      }
        </div>

      </div>
    </div>
  );
};

export default BoardDatas;
