// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Map, ListCardOffer } from '../../components';
import { useSelector, useDispatch } from 'react-redux';

import { TOGGLE_OPEN_SLIDE } from '../../store/actions'
// import container
import BoardDatas from '../BoardDatas';

// import icons

// import style
import style from './Explore.module.scss';

// Comments
// Modal to add after div Boardatas

const Explore = () => {
  const dispatch = useDispatch();
  const isLeftSlideOpen = useSelector((state) => state.domSettings.isLeftSlideOpen)


  return (

    <div className={style.container}>

      <div className={style.container__tabnavbar}>
        <FontAwesomeIcon icon={faHome} size="3x" color="#406F8A" />
        <h4>Recherche</h4>
        <h4>Annonces</h4>
        <h4>Statistique</h4>
      </div>
      <div className={isLeftSlideOpen ?  style.container__listcardoffer_open   : `${style.container__listcardoffer}` }>
        <ListCardOffer />
      </div>
        <FontAwesomeIcon icon={faAngleDoubleLeft}
          onClick={() => { dispatch({
            type:TOGGLE_OPEN_SLIDE,
            slide: "isLeftSlideOpen"})
            }}
          size="4x"
          color="#406F8A"
          className={isLeftSlideOpen ? style.container__icon_open : style.container__icon }          
        />
      <div className={style.container__map}>
        <Map />
      </div>

      <div className={style.container__boarddatas}>
        <BoardDatas />
      </div>

    </div >
  );
}

export default Explore;
