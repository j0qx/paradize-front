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
      <h1>Welcome Prénom</h1>
      <ButtonSubmit />
      <ButtonSubmit />
    </div>
  );
}
export default Header;
