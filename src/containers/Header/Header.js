// import component
import { useDispatch, useSelector } from 'react-redux';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSubmit } from '../../components';
import logo from '../../assets/image/logo.svg';
import { SET_MODAL_CONTENT, TOGGLE_PRINT_MODAL, TOGGLE_OPEN_BURGER_ACCOUNT } from '../../store/actions';
import style from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);
  const isAccountListOpen = useSelector((state) => state.domSettings.isAccountListOpen);
  const isLogged = useSelector((state) => state.user.isLogged);
  // state about NavBar opening ( here we use usestate because the npm modul
  // that we using for is using this way and not redux state)
  const [isOpen, setOpen] = useState(false);
  const isMobile = window.screen.width < 500;

  return (
    <nav className={isOpen ? `${style.navbar} ${style.navbarOpened}` : style.navbar}>
      <div className={style.navbar__logoContainer}>
        <Link to="/">
          <img alt={logo} src={logo} className={style.navbar__logoContainer__logo} />
        </Link>
      </div>
      <p className={style.navbar__message}> </p>
      {/* IF User isn't connected, we show signin and sugnUp Button  */}
      {isLogged === false && (
      <ul className={style.navbar__linksContainer}>
        <li className={style.navbar__linksContainer__link}>
          <ButtonSubmit
            classCSS={isOpen === false ? '' : 'navbar_button'}
            buttonName="S'inscrire"
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
            classCSS={isOpen ? 'navbar_button' : ''}
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
            buttonName="Se connecter"
          />
        </li>
      </ul>
      )}
      {/* IF User is connected, we show profil and logout  Button  */}
      {isLogged && (
      <ul className={style.navbar__linksContainer}>
        <li className={style.navbar__linksContainer__link}>
          <Link to="/">
            <ButtonSubmit
              classCSS={isOpen ? 'navbar_button' : ''}
              buttonName="Se déconnecter"
              handleButtonClick={() => {
                dispatch({ type: 'LOGOUT' });
                localStorage.clear();
              }}
            />
          </Link>
        </li>
        <li className={style.navbar__linksContainer__link}>
          <Link to="/account/infos">
            <ButtonSubmit
              classCSS={isOpen ? 'navbar_button' : ''}
              handleButtonClick={() => {
                dispatch({ type: TOGGLE_OPEN_BURGER_ACCOUNT });
              // TODO
              }}
              buttonName="Mon compte"
            />
          </Link>
        </li>
      </ul>
      )}
      {isLogged && isAccountListOpen === true && isMobile && (
        <ul className={style.navbar__linksContainer}>
          <li className={style.navbar__linksContainer__link}>
            <Link to="/">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_button' : ''}
                buttonName="Se déconnecter"
                handleButtonClick={() => {
                  dispatch({ type: 'LOGOUT' });
                  localStorage.clear();
                }}
              />
            </Link>
          </li>
          <li className={style.navbar__linksContainer__link}>
            <Link to="/account/infos">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_button' : ''}
                handleButtonClick={() => {
                  dispatch({ type: TOGGLE_OPEN_BURGER_ACCOUNT });
                  // TODO
                }}
                buttonName="Mon compte"
              />
            </Link>
          </li>
          <li className={style.navbar__linksContainer__link__sublink}>
            <Link to="/account/infos">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_account_button' : ''}
                handleButtonClick={() => {
                  setOpen(false);
                  // TODO
                }}
                buttonName="Mes Infos"
              />
            </Link>
          </li>
          <li className={style.navbar__linksContainer__link__sublink}>
            <Link to="/account/myoffers">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_account_button' : ''}
                handleButtonClick={() => {
                  setOpen(false);
                // TODO
                }}
                buttonName="Mes annonces"
              />
            </Link>
          </li>
          <li className={style.navbar__linksContainer__link__sublink}>
            <Link to="/account/favorites">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_account_button' : ''}
                handleButtonClick={() => {
                  setOpen(false);
                // TODO
                }}
                buttonName="Mes annonces sauvegardées"
              />
            </Link>
          </li>
          <li className={style.navbar__linksContainer__link__sublink}>
            <Link to="/account/mysearch">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_account_button' : ''}
                handleButtonClick={() => {
                  setOpen(false);
                // TODO
                }}
                buttonName="Mes recherches"
              />
            </Link>
          </li>
          <li className={style.navbar__linksContainer__link__sublink}>
            <Link to="/account/settings">
              <ButtonSubmit
                classCSS={isOpen ? 'navbar_account_button' : ''}
                handleButtonClick={() => {
                  setOpen(false);
                // TODO
                }}
                buttonName="Paramétres"
              />
            </Link>
          </li>
        </ul>
      )}
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
