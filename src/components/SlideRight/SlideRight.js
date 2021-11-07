import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import style from './SlideRight.module.scss';
import { TOGGLE_OPEN_SLIDE } from '../../store/actions';

const SlideRight = ({ children }) => {
  const dispatch = useDispatch();
  const isRightSlideOpen = useSelector((state) => state.domSettings.isRightSlideOpen);

  return (
    <>
      <FontAwesomeIcon
        icon={isRightSlideOpen ? faChevronLeft : faChevronRight}
        // If the current slide content was ListCardOffer Slide, we set the state to false
        onClick={() => {
          dispatch({
            type: TOGGLE_OPEN_SLIDE,
            slide: 'isRightSlideOpen',
          });
        }}
        size="4x"
        color="#406F8A"
        className={style.slide__icon}
      />
      <div className={isRightSlideOpen ? style.slide__left__open : style.slide}>
        {children}
      </div>
    </>
  );
};
SlideRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideRight;
