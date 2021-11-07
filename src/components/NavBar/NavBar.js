// import NPM
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';

const NavBar = () => (

  // Both h2 are becoming NavLink after Router is going to be OK.
  // Need to link  both pages
  <nav className={style.navBar_Container}>
    <NavLink
      exact
      to="/legal-notice"
      className={style.navBar_Container_Title}
    >
      Mentions légales
    </NavLink>
    <NavLink
      exact
      to="/contact"
      className={style.navBar_Container_Title}
    >
      Contacts
    </NavLink>
  </nav>
);
export default NavBar;
