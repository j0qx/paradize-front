import { useSelector, useDispatch } from 'react-redux';
// import  Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
// import components
import {
  Map, ListCardOffer, SlideRight, SlideLeft, SearchDataSettings,
  SearchZoneSettings,
} from '../../components';
// import container
import BoardDatas from '../BoardDatas';
// import style
import style from './Explore.module.scss';
import { TOGGLE_OPEN_MAP_SLIDE } from '../../store/actions';

// Comments
// Modal to add after div Boardatas

const Explore = () => {
  const dispatch = useDispatch();
  const isMapSlideOpen = useSelector((state) => state.domSettings.isMapSlideOpen);
  const isSearchSlideOpen = useSelector((state) => state.domSettings.isSearchSlideOpen);
  const isOffersSlideOpen = useSelector((state) => state.domSettings.isOffersSlideOpen);
  const isStatisticsSlideOpen = useSelector((state) => state.domSettings.isStatisticsSlideOpen);

  return (
    <div className={style.container}>
      <div className={style.container__tabnavbar}>
        <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" color="#406F8A" />
        <h3
          onClick={(event) => {
            console.log(event.target);
            dispatch({
              type: TOGGLE_OPEN_MAP_SLIDE,
              openslide: 'isSearchSlideOpen',
            });
          }}
          //className={isSearchSlideOpen ? style.container}
        >Recherche
        </h3>
        <span>Annonces</span>
        <span>Statistique</span>
      </div>

      <SlideLeft>
        <ListCardOffer />
      </SlideLeft>
      <div className={style.container__map}>
        <Map />
        <div className={style.container__datas}>
          <SearchDataSettings />
        </div>
      </div>
      <SlideRight>
        <BoardDatas />
      </SlideRight>

    </div>
  );
};

export default Explore;
