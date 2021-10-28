import style from './NavBar.module.scss';
export function NavBar(props) {

  return (

// Both h2 are becoming NavLink after Router is going to be OK.
// Need to link  both pages
    <div className={style.navBar_Container}>
      <h2 className={style.navBar_Container_Title}>Mentions légales</h2>
      <h2 className={style.navBar_Container_Title}>Contacts</h2>
    </div>
  );
}
export default NavBar;
