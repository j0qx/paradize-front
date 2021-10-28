// import component
import { ButtonSubmit } from '@oparadise/react-components';
import logo from '../../assets/image/logo.svg';
import style from './Header.module.scss';

export function Header(props) {

  return (
    <div className={style.header}>
      <div className={style.header__mainlogo}>
        <img className={style.header__mainlogo__logo} src={logo} alt="logo de O'Paradise" />
        <div className={style.header__burger}> Burger </div>
      </div>
      <span>Welcome Prénom</span>
      <ButtonSubmit className={style.header__button} />
      <ButtonSubmit className={style.header__button} />
    </div>
  );
}
export default Header;
