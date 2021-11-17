import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import style from './TabNavBar.module.scss';

// Check Navlink et creation des routes sans id.

const TabNavBar = ({ navPages }) => (

  <nav className={style.TabNavBar__menu}>
    <NavLink to="/explore">
      <FontAwesomeIcon
        icon={faMapMarkedAlt}
        size="3x"
        className={style.TabNavBar__menu__icon}
        activeClassName={style.TabNavBar__menu__link__active}
      />
    </NavLink>
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

TabNavBar.propTypes = {
  navPages: PropTypes.arrayOf(
    PropTypes.shape({
      linkTo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TabNavBar;
