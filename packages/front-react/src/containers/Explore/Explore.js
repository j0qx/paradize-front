// import components
import {
  Map, MapSettings, Modal, ListCardOffer,
} from '../../components';
//import container
import BoardDatas from '../BoardDatas';

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import map from '../../assets/image/map.jpg'
//import style
import style from './Explore.module.scss';

// Comments
// Modal to add after div Boardatas

const Explore = () => (
  <div className={style.container}>

    <div className={style.container__tabnavbar}>
      <FontAwesomeIcon icon={faHome} size='3x' color='#406F8A ' />
      <h4>Recherche</h4>
      <h4>Annonces</h4>
      <h4>Statistique</h4>
    </div>
    <div className={style.container__listcardoffer}>
      <ListCardOffer />
    </div>

    <div className={style.container__map}>
      <div className={style.container__map__map}>
        <img className={style.container__map__picture} src={map} alt="" />
      </div>
      
    </div>

    <div className={style.container__boarddatas}>
      <BoardDatas />
    </div>

  </div>
);

export default Explore;
