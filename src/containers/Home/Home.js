import style from './Home.module.scss';
import { SearchZoneSettings } from '../../components';
import mappix from '../../assets/image/map.jpg';
import image from '../../assets/image/pexels-roberto-shumski-1903702.jpg';
import image3 from '../../assets/image/pexels-pixabay-531321.jpg';
import image4 from '../../assets/image/pexels-mateusz-sałaciak-4275885.jpg';
import image5 from '../../assets/image/pexels-krisp-cut-2468773.jpg';
const Home = () => (

  <div className={style.home__main}>
    <img className={style.home__main__background} src={mappix} alt="" />
    <div className={style.home__main__content}>
      <SearchZoneSettings />
    </div>
  </div>
);

export default Home;
