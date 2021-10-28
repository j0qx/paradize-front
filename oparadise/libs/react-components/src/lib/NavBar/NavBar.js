import style from './NavBar.module.scss';
export function NavBar(props) {

  return (

// Both h2 are becoming NavLink after Router is going to be OK.
// Need to link  both pages
    <div className={style.navBar_Container}>
      <span className={style.navBar_Container_Title}>Mentions légales</span>
      <span className={style.navBar_Container_Title}>Contacts</span>
    </div>
  );
}
export default NavBar;
