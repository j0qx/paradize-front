// import component
import { ButtonSubmit } from '@oparadise/react-components';
import logo from '../../assets/image/logo.svg';
import style from './Header.module.scss';

export function Header(props) {
  return (
    <div className={style.container}>
      <div className={style.mainLogo}>
        <img className ={style.mainLogo__logo} src={logo} alt=""  />
      </div>
      <ButtonSubmit />
      <ButtonSubmit />
      <h1>Welcome to Header!</h1>
    </div>
  );
}
export default Header;
