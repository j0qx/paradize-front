import style from './Home.module.scss';
import Search from '../Search/Search';
import mappix from '../../assets/image/map.jpg';
import Dougnut from '../../components/Charts/Dougnut';

const Home = () => (

  <div className={style.home__main}>
    <img className={style.home__main__background} src={mappix} alt="" />
    <div className={style.home__main__content}>
      <Dougnut />
      <Search />
    </div>
  </div>
);

export default Home;
