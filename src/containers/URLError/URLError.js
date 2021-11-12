import style from './URLError.module.scss';
import treePicture from '../../assets/image/ile.png';
import cloud from '../../assets/image/entete.png';
// import sea from '../../assets/image/decor.png';

const URLError = () => (
  <div className={style.urlError}>
    <div className={style.urlError__inner}>
      <div className={style.urlError__boxFront}>
        <img className={style.urlError__cloudpic} src={cloud} alt="" />
      </div>
      <div className={style.urlError__boxBack}>
        <img className={style.urlError__tree} src={treePicture} alt="" />
        <h2 className={style.urlError__title}> 404 !</h2>
      </div>
    </div>
  </div>
);
export default URLError;
