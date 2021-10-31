// import component
import { useDispatch, useSelector } from 'react-redux';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { ButtonSubmit } from '../../components';
import logo from '../../assets/image/logo.svg';
import { SET_MODAL_CONTENT, TOGGLE_PRINT_MODAL } from '../../store/actions';
import style from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={isOpen ? `${style.navbar} ${style.navbarOpened}` : style.navbar}>
      <div className={style.navbar__logoContainer}>
        <img alt={logo} src={logo} className={style.navbar__logoContainer__logo} />
      </div>
      <p className={style.navbar__message}> Welcome Mister </p>
      <ul className={style.navbar__linksContainer}>
        <li className={style.navbar__linksContainer__link}>
          <ButtonSubmit
            classCSS={style.navbar__button}
            buttonName="Inscription"
            handleButtonClick={() => {
              // If the modal is already we didnt do anything
              if (isModalHidden === false) {
                return;
              }
              // we close de nav Menu
              setOpen(false);
              // we print the modal
              dispatch({ type: TOGGLE_PRINT_MODAL });
              // we set wich modal content do we want
              dispatch({ type: SET_MODAL_CONTENT, modalContent: 'isSubscribeModal' });
            }}
          />
        </li>
        <li className={style.navbar__linksContainer__link}>
          <ButtonSubmit
            classCSS={style.navbar__button}
            handleButtonClick={() => {
              // If the modal is already we didnt do anything
              if (isModalHidden === false) {
                return;
              }
              // we close de nav Menu
              setOpen(false);
              // we print the modal
              dispatch({ type: TOGGLE_PRINT_MODAL });
              // we set wich modal content do we want
              dispatch({ type: SET_MODAL_CONTENT, modalContent: 'isLoginModal' });
            }}
            buttonName="Connexion"
          />
        </li>
      </ul>
      <div className={style.navbar__burger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </nav>
  );
};
export default Header;
