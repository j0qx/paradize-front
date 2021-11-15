import style from './URLError.module.scss';

import island from '../../assets/image/atlas404.png';
// import sea from '../../assets/image/decor.png';

const URLError = () => {
  const $text = ' 404 not found ';
  const tabs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];

  return (
    <div className={style.urlError}>
      <div className={style.urlError__inner}>
        <img className={style.urlError__cloudpic} src={island} alt="" />
        <h3 className={style.urlError__title}>
          Le bonheur n'est jamais loin, juste pas ici !
        </h3>
        <div className={style.urlError__text}>
          <div className={style.ui}>
            {
            tabs.map((tab) => <h4 key={tab} className={style.ui__text}>{$text}</h4>)
}
          </div>
        </div>
      </div>
    </div>
  );
};
export default URLError;
