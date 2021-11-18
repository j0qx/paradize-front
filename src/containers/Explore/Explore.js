/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimension from 'use-window-dimensions';
import ReactTooltip from 'react-tooltip';

// import  Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
// import components
import {
  Map, ListCardOffer, SlideRight, SlideLeft, SearchDataSettings,
  SearchZoneSettings,
} from '../../components';
// import container
import BoardDatas from '../BoardDatas';
// import style
import style from './Explore.module.scss';
import { TOGGLE_OPEN_EXPLORE_SLIDE, TOGGLE_PRINT_EXPLORE_SEARCH } from '../../store/actions';
// Comments
// Modal to add after div Boardatas

const Explore = () => {
  const { width } = useWindowDimension();
  const dispatch = useDispatch();
  const isMapSlideOpen = useSelector((state) => state.domSettings.slide.isMapSlideOpen);
  const isSearchSlideOpen = useSelector((state) => state.domSettings.slide.isSearchSlideOpen);
  const isOffersSlideOpen = useSelector((state) => state.domSettings.slide.isOffersSlideOpen);
  const isStatisticsSlideOpen = useSelector((state) => state.domSettings.slide.isStatisticsSlideOpen);
  const isSearchSettingsOpen = useSelector((state) => state.domSettings.isSearchSettingsOpen);
  const searchTooltip = "Içi, vous pouvez cliquer afin d'afficher le panneau de recherche!";

  return (
    <div className={style.container}>
      <div className={style.container__tabnavbar}>
        <FontAwesomeIcon
          onClick={() => {
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
            dispatch({
              type: TOGGLE_OPEN_EXPLORE_SLIDE,
              openslide: 'isStatisticsSlideOpen',
            });
          }}
        >Statistique
        </span>
      </div>
      { (isOffersSlideOpen || width > 1000)
      && (
      <SlideLeft>
        <ListCardOffer />
      </SlideLeft>
      )}
      <div className={isMapSlideOpen === false && width < 1100 ? style.container__mapnone : style.container__map}>
        <Map />
        <div className={style.searchContainer__and__icon}>
          {width > 1100
          && (
            <>
              <ReactTooltip
                id={searchTooltip}
                place="top"
                effect="float"
              />
              <div data-tip={searchTooltip} data-for={searchTooltip} className={isSearchSettingsOpen ? style.faDown_icon : style.faUp_icon}>
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size="2x"
                  onClick={() => {
                    dispatch({ type: TOGGLE_PRINT_EXPLORE_SEARCH });
                  }}
                />
              </div>
            </>
          )}
          {(isSearchSlideOpen || width > 1100)
          && (
          <div className={isSearchSettingsOpen ? style.searchContainer_open : style.searchContainer}>
            <SearchDataSettings />
            <SearchZoneSettings />
          </div>
          )}
        </div>
      </div>
      {(isStatisticsSlideOpen || width > 1100)
        && (
        <SlideRight>
          <BoardDatas />
        </SlideRight>
        )}
    </div>
  );
};

export default Explore;
