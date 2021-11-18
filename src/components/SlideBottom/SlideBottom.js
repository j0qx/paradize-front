import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import style from './SlideBottom.module.scss';
import { TOGGLE_OPEN_SLIDE } from '../../store/actions';

const SlideBottom = ({ children }) => {
  const dispatch = useDispatch();
  const isBottomSlideOpen = useSelector((state) => state.domSettings.isBottomSlideOpen);
  return (
    <>
      <div className={isBottomSlideOpen ? style.slide__bottom__open : style.slide}>
        {children}
      </div>
      <FontAwesomeIcon
        icon={faAngleDoubleLeft}
        // If the current slide content was ListCardOffer Slide, we set the state to false
        onClick={(event) => {
          console.log(event.target);
          dispatch({
            type: TOGGLE_OPEN_SLIDE,
            slide: 'isBottomSlideOpen',
          });
        }}
        size="4x"
        color="#406F8A"
        className={isBottomSlideOpen ? style.slide__icon_open : style.slide__icon}
      />
    </>
  );
};
SlideBottom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideBottom;
