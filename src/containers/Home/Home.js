import style from './Home.module.scss';
import { SearchZoneSettings } from '../../components';
import image from '../../assets/image/pexels-roberto-shumski-1903702.jpg';

const Home = () => (

  <div className={style.home__main}>
    <img className={style.home__main__background} src={image} alt="" />
    <div className={style.home__main__content}>
      <SearchZoneSettings />
    </div>
  </div>
);

export default Home;
