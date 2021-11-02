import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import style from './SlideLeft.module.scss';
import { TOGGLE_OPEN_SLIDE } from '../../store/actions';

const SlideLeft = ({ children }) => {
  const dispatch = useDispatch();
  const isLeftSlideOpen = useSelector((state) => state.domSettings.isLeftSlideOpen);

  return (
    <>
      <div className={isLeftSlideOpen ? style.slide__left__open : style.slide}>
        {children}
      </div>
      <FontAwesomeIcon
        icon={faAngleDoubleLeft}
        // If the current slide content was ListCardOffer Slide, we set the state to false
        onClick={(event) => {
          console.log(event.target);
          dispatch({
            type: TOGGLE_OPEN_SLIDE,
            slide: 'isLeftSlideOpen',
          });
        }}
        size="4x"
        color="#406F8A"
        className={isLeftSlideOpen ? style.slide__icon_open : style.slide__icon}
      />
    </>
  );
};
SlideLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideLeft;
