// import component
import { ButtonSubmit } from '@oparadise/react-components';
import logo from '../../assets/image/logo.svg';

//import { faBars } from '@fortawesome/free-solid-svg-icons'
import style from './Header.module.scss';

export function Header(props) {

  return (
    <div className={style.header}>
      <div className={style.header__mainlogo}>
        <img className={style.header__mainlogo__logo} src={logo} alt="logo de O'Paradise" />
        <i className={` ${style.header__burger} fas fa-bars fa-4x`}  />

      </div>
      <span>Welcome Prénom</span>
      <ButtonSubmit
      className={style.header__button}
      //classCSS
      //buttonName
      />
      <ButtonSubmit className={style.header__button} />
    </div>
  );
}
export default Header;
