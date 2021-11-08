import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './TabNavBar.module.scss';

// Check Navlink et creation des routes sans id.

const TabNavBar = ({ navPages }) => (

  <nav className={style.TabNavBar__menu}>
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
