import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonSubmit, InputBase } from '../../components';
import { CHANGE_INPUT_VALUE_SIGNUP, CREATE_USER } from '../../store/actions';
import style from './UserSubscribe.module.scss';

const UserSubscribe = () => {
  const lastName = useSelector((state) => state.signUp.lastName);
  const firstName = useSelector((state) => state.signUp.firstName);
  const mail = useSelector((state) => state.signUp.mail);
  const password = useSelector((state) => state.signUp.password);
  const pseudo = useSelector((state) => state.signUp.username);
  const dispatch = useDispatch();
  return (
    <div className={style.userSubscribe}>
      <h1 className={style.userSubscribe__title}> Créer un compte</h1>
      <form
        className={style.userSubscribe__form}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: CREATE_USER });
        }}
      >
        <InputBase
          icon={faUser}
          inputName="lastName"
          placeholder="Nom"
          classCSS=""
          inputValue={lastName}
          actionType={CHANGE_INPUT_VALUE_SIGNUP}
        />
        <InputBase
          icon={faUser}
          inputName="firstName"
          placeholder="Prénom"
          classCSS=""
          inputValue={firstName}
          actionType={CHANGE_INPUT_VALUE_SIGNUP}
        />
        <InputBase
          icon={faUser}
          inputName="username"
          placeholder="Pseudo"
          classCSS=""
          inputValue={pseudo}
          actionType={CHANGE_INPUT_VALUE_SIGNUP}
        />
        <InputBase
          icon={faEnvelope}
          inputName="mail"
          placeholder="Mail"
          classCSS=""
          inputValue={mail}
          actionType={CHANGE_INPUT_VALUE_SIGNUP}
        />
        <InputBase
          icon={faLock}
          inputName="password"
          placeholder="Mot de passe"
          classCSS=""
          inputType="password"
          inputValue={password}
          actionType={CHANGE_INPUT_VALUE_SIGNUP}
        />
        <ButtonSubmit
          buttonName="Valider"
          classCSS={style.userSubscribe__form__button}
        />

      </form>
    </div>
  );
};
export default UserSubscribe;
