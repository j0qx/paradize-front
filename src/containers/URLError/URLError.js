import style from './URLError.module.scss';

import city from '../../assets/image/city.jpg';
// import sea from '../../assets/image/decor.png';

const URLError = () => (
  <div className={style.urlError}>
    <img className={style.urlError__image} src={city} alt="" />
    <div className={style.urlError__inner}>
      <div className={style.urlError__text}>
        <div className={style.ui}>
          <h1 className={style.title}>404<br />NOT FOUND</h1>
        </div>
      </div>
      <h3 className={style.urlError__title}>
        Le bonheur n'est jamais loin, juste pas ici !
      </h3>
    </div>
  </div>
);
export default URLError;
