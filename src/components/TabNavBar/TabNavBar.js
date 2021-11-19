import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import style from './TabNavBar.module.scss';
import { TOGGLE_OPEN_SLIDE } from '../../store/actions';
import BackButton from '../BackButton';

// Check Navlink et creation des routes sans id.

const TabNavBar = ({ navPages }) => {
  const dispatch = useDispatch();
  const isRightSlideOpen = useSelector((state) => state.domSettings.isRightSlideOpen);
  const isLeftSlideOpen = useSelector((state) => state.domSettings.isLeftSlideOpen);
  return (
    <nav className={style.TabNavBar__menu}>
      <Link to="/explore">
        <BackButton
          value="Direction la carte"
          classCss="button__back"
          handleButtonClick={() => {
            if (isRightSlideOpen === false) {
              dispatch({
                type: TOGGLE_OPEN_SLIDE,
                slide: 'isRightSlideOpen',
              });
            }
            if (isLeftSlideOpen === false) {
              dispatch({
                type: TOGGLE_OPEN_SLIDE,
                slide: 'isLeftSlideOpen',
              });
            }
          }}
        />
      </Link>
      {
      navPages.map(({ linkTo, title }) => (
        <NavLink
          key={linkTo}
          className={style.TabNavBar__menu__link}
          activeClassName={style.TabNavBar__menu__link__active}
          to={linkTo}
        >
          {title}
        </NavLink>
      ))
    }
    </nav>
  );
};

TabNavBar.propTypes = {
  navPages: PropTypes.arrayOf(
    PropTypes.shape({
      linkTo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TabNavBar;
