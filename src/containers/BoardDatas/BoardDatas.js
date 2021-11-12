import style from './BoardDatas.module.scss';

import Dougnut from '../../components/Charts/Dougnut';
import Pie from '../../components/Charts/PieCharts';
import Bar from '../../components/Charts/BarCharts';
import Line from '../../components/Charts/LineCharts';

const BoardDatas = () => (

  // Two div of graphic percent and 4 fake div to simulate futurs graphics.
  <div className={style.boarddatas_container}>
    <div className={style.boarddatas_container__list}>

      <div className={style.boarddatas_container__list__dougnut}>
        <Dougnut />
      </div>

      <div className={style.boarddatas_container__list__pie}>
        <Pie />
      </div>

      <div className={style.boarddatas_container__list__bar}>
        <Bar />
      </div>

      <div className={style.boarddatas_container__list__line}>
        <Line />
      </div>

    </div>
  </div>
);

export default BoardDatas;
