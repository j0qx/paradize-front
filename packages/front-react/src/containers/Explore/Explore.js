/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimension from 'use-window-dimensions';

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
import { TOGGLE_OPEN_EXPLORE_SLIDE } from '../../store/actions';

// Comments
// Modal to add after div Boardatas

const Explore = () => {
  const { width } = useWindowDimension();
  const dispatch = useDispatch();
  const isMapSlideOpen = useSelector((state) => state.domSettings.slide.isMapSlideOpen);
  const isSearchSlideOpen = useSelector((state) => state.domSettings.slide.isSearchSlideOpen);
  const isOffersSlideOpen = useSelector((state) => state.domSettings.slide.isOffersSlideOpen);
  const isStatisticsSlideOpen = useSelector((state) => state.domSettings.slide.isStatisticsSlideOpen);

  return (
    <div className={style.container}>
      <div className={style.container__tabnavbar}>
        <FontAwesomeIcon
          onClick={() => {
            console.log(width);
            dispatch({
              type: TOGGLE_OPEN_EXPLORE_SLIDE,
              openslide: 'isMapSlideOpen',
            });
          }}
          icon={faMapMarkedAlt}
          size="3x"
          color="#406F8A"
        />
        <span
          onClick={() => {
            dispatch({
              type: TOGGLE_OPEN_EXPLORE_SLIDE,
              openslide: 'isSearchSlideOpen',
            });
          }}
        >Recherche
        </span>
        <span
          onClick={() => {
            dispatch({
              type: TOGGLE_OPEN_EXPLORE_SLIDE,
              openslide: 'isOffersSlideOpen',
            });
          }}
        >Annonces
        </span>
        <span
          onClick={() => {
            console.log(isStatisticsSlideOpen === false && width < 1100);
            dispatch({
              type: TOGGLE_OPEN_EXPLORE_SLIDE,
              openslide: 'isStatisticsSlideOpen',
            });
          }}
        >Statistique
        </span>
      </div>

      <SlideLeft>
        <ListCardOffer />
      </SlideLeft>
      <div className={isMapSlideOpen === false && width < 1100 ? style.container__mapnone : style.container__map}>
        <Map />
        <div className={style.container__datas}>
          <SearchDataSettings />
        </div>
      </div>
      <div className={isStatisticsSlideOpen === false && width < 1100 ? style.container__boarddatas : style.container__boarddatasnone}>
        <SlideRight>
          <BoardDatas />
        </SlideRight>
      </div>
    </div>
  );
};

export default Explore;
