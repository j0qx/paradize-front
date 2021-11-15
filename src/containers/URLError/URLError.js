import style from './URLError.module.scss';

import island from '../../assets/image/atlas404.png';
// import sea from '../../assets/image/decor.png';

const URLError = () => (
  <div className={style.urlError}>
    <div className={style.urlError__inner}>
      <img className={style.urlError__cloudpic} src={island} alt="" />
      <div className={style.urlError__text}>
        <h3 className={style.urlError__title}>
          404 not found, le bonheur n'est jamais loin, mais pas ici !
        </h3>
      </div>
    </div>
  </div>
);
export default URLError;
