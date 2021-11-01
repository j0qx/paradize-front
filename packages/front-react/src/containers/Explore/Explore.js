// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Map, ListCardOffer } from '../../components';
// import container
import BoardDatas from '../BoardDatas';

// import icons

// import style
import style from './Explore.module.scss';

// Comments
// Modal to add after div Boardatas

const Explore = () => (
  <div className={style.container}>

    <div className={style.container__tabnavbar}>
      <FontAwesomeIcon icon={faHome} size="3x" color="#406F8A " />
      <h4>Recherche</h4>
      <h4>Annonces</h4>
      <h4>Statistique</h4>
    </div>
    <div className={style.container__listcardoffer}>
      <ListCardOffer />
    </div>

    <div className={style.container__map}>
        <Map />
    </div>

    <div className={style.container__boarddatas}>
      <BoardDatas />
    </div>

  </div>
);

export default Explore;
