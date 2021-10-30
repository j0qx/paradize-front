import style from './BoardDatas.module.scss';
import graph from '../../assets/image/graph.jpg';
import percentgraph from '../../assets/image/percentgraph.png';
const BoardDatas = () => (

  // Two div of graphic percent and 4 fake div to simulate futurs graphics.
  <div className={style.boarddatas_container}>
    <div className={style.boarddatas_container__list}>

      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>

      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
      <div className={style.boarddatas_container__list__graph}>
        <img className={style.boarddatas_container__list__graph__picture} src={graph} alt="" />
        <h4> Titre du graph</h4>
      </div>
    </div>
  </div>
);

export default BoardDatas;
