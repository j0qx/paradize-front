// import component
import { ButtonSubmit } from '../../components';
import logo from '../../assets/image/logo.svg';

// import { faBars } from '@fortawesome/free-solid-svg-icons'
import style from './Header.module.scss';

const Header = () => (
  <div className={style.header}>
    <div className={style.header__mainlogo}>
      <img className={style.header__mainlogo__logo} src={logo} alt="logo de O'Paradise" />
      <i className={` ${style.header__burger} fas fa-bars fa-4x`} />

    </div>
    <span className={style.header__userName}>Welcome Prénom</span>
    <div className={style.header__mainButtons}>
      <ButtonSubmit
        classCSS={style.header__mainButtons__button}
        buttonName="Inscription"
      />
      <ButtonSubmit
        classCSS={style.header__mainButtons__button}
        buttonName="Connexion"
      />
    </div>
  </div>
);
export default Header;
