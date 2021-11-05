import style from './Home.module.scss';
import Search from '../Search/Search';
import mappix from '../../assets/image/map.jpg';
const Home = () => (

  <div className={style.home__main}>
    <img className={style.home__main__background} src={mappix} alt="" />
    <div className={style.home__main__content}>
      <Search />
    </div>
  </div>
);

export default Home;
