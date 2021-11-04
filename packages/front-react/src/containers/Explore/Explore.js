// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  Map, ListCardOffer, SlideRight, SlideLeft, SlideBottom,
} from '../../components';

import Search from '../Search';
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
      <FontAwesomeIcon icon={faHome} size="3x" color="#406F8A" />
      <h4>Recherche</h4>
      <h4>Annonces</h4>
      <h4>Statistique</h4>
    </div>

    <SlideLeft>
      <ListCardOffer />
    </SlideLeft>
    <div className={style.container__map}>
      <Map />
      <div className={style.container__map__slide}>
        <SlideBottom>
          <Search />
        </SlideBottom>
      </div>
    </div>
    <SlideRight>
      <BoardDatas />
    </SlideRight>

  </div>
);

export default Explore;
