import style from './SlideRight.module.scss';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { TOGGLE_OPEN_SLIDE } from '../../store/actions';



const SlideRight = ({ children }) => {
  const dispatch = useDispatch();
  const isRightSlideOpen = useSelector((state) => state.domSettings.isRightSlideOpen);

  return (
    <>
      <FontAwesomeIcon icon={faAngleDoubleRight}
        // If the current slide content was ListCardOffer Slide, we set the state to false
        onClick={(event) => {
          console.log(event.target)
          dispatch({
            type: TOGGLE_OPEN_SLIDE,
            slide: "isRightSlideOpen"
          })
        }
        }
        size="4x"
        color="#406F8A"
        className={isRightSlideOpen ? style.slide__icon_open : style.slide__icon}
      />
      <div className={isRightSlideOpen ? style.slide__left__open : style.slide}>
        {children}
      </div>
    </>
  )
}
SlideRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideRight;
