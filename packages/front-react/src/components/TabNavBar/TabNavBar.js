import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';
import style from './TabNavBar.module.scss';

// Check Navlink et creation des routes sans id.

const TabNavBar = () => {
  const test = 'tt';
  // const isLogged = useSelector((state)=> state...)
  return (

    <nav className={style.TabNavBar__menu}>
      <NavLink
        className={style.TabNavBar__menu__icon}
        exact
        activeClassName={style.TabNavBar__menu__link__active__icon}
        to="/account"
      >
        <FontAwesomeIcon className={style.TabNavBar__menu__icon} icon={faHouseUser} size="3x" />
      </NavLink>

      <NavLink
        className={style.TabNavBar__menu__link}
        activeClassName={style.TabNavBar__menu__link__active}
        exact
        to="/account/infos"
      >
        Mes infos
      </NavLink>

      <NavLink
        className={style.TabNavBar__menu__link}
        activeClassName={style.TabNavBar__menu__link__active}
        exact
        to="/account/myoffers"
      >
        Mes Annonces
      </NavLink>

      <NavLink
        className={style.TabNavBar__menu__link}
        activeClassName={style.TabNavBar__menu__link__active}
        exact
        to="/account/favorite"
      >
        Mes Annonces sauvegardées
      </NavLink>

      <NavLink
        className={style.TabNavBar__menu__link}
        activeClassName={style.TabNavBar__menu__link__active}
        exact
        to="/account/mysearch"
      >
        Mes recherches
      </NavLink>
      <NavLink
        className={style.TabNavBar__menu__link}
        activeClassName={style.TabNavBar__menu__link__active}
        exact
        to="/account/settings"
      >
        Paramètres
      </NavLink>

    </nav>

  );
};

export default TabNavBar;
