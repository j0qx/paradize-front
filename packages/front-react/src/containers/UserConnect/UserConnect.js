import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ButtonSubmit, InputBase } from '../../components';
import style from './UserConnect.module.scss';

const UserConnect = () => {
  const lastName = useSelector((state) => state.signUp.lastName);
  const firstName = useSelector((state) => state.signUp.firstName);
  const mail = useSelector((state) => state.signUp.mail);
  const password = useSelector((state) => state.signUp.password);
  return (
    <div className={style.userConnect}>
      <h1 className={style.userConnect__title}> Créer un compte</h1>
      <form className={style.userConnect__form}>
        <InputBase
          icon={faUser}
          inputName="lastName"
          placeholder="Nom"
          classCSS=""
          inputValue={lastName}
        />
        <InputBase
          icon={faUser}
          inputName="firstName"
          placeholder="Prénom"
          classCSS=""
          inputValue={firstName}
        />
        <InputBase
          icon={faEnvelope}
          inputName="mail"
          placeholder="Mail"
          classCSS=""
          inputValue={mail}
        />
        <InputBase
          icon={faLock}
          inputName="password"
          placeholder="Mot de passe"
          classCSS=""
          inputValue={password}
        />
        <ButtonSubmit
          buttonName="Valider"
          classCSS={style.userConnect__form__button}
        />

      </form>
    </div>
  );
};
export default UserConnect;
