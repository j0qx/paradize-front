// import component
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonSubmit } from '../../components';
import logo from '../../assets/image/logo.svg';
import { SET_MODAL_CONTENT, TOGGLE_PRINT_MODAL } from '../../store/actions';
import style from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);
  return (
    <div className={style.header}>
      <div className={style.header__mainlogo}>
        <img className={style.header__mainlogo__logo} src={logo} alt="logo de O'Paradise" />
        <div className={style.header__burger}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      <span className={style.header__userName}>Welcome Prénom</span>
      <div className={style.header__mainButtons}>
        <ButtonSubmit
          classCSS={style.header__mainButtons__button}
          buttonName="Inscription"
          handleButtonClick={() => {
            // If the modal is already we didnt do anything
            if (isModalHidden === false) {
              return;
            }
            dispatch({ type: TOGGLE_PRINT_MODAL });
            dispatch({ type: SET_MODAL_CONTENT, modalContent: 'isSubscribeModal' });
          }}
        />
        <ButtonSubmit
          classCSS={style.header__mainButtons__button}
          handleButtonClick={() => {
            // If the modal is already we didnt do anything
            if (isModalHidden === false) {
              return;
            }
            dispatch({ type: TOGGLE_PRINT_MODAL });
            dispatch({ type: SET_MODAL_CONTENT, modalContent: 'isLoginModal' });
          }}
          buttonName="Connexion"
        />
      </div>
    </div>
  );
};
export default Header;
