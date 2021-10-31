import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ButtonSubmit, InputBase } from '../../components';
import style from './UserConnect.module.scss';

const UserConnect = () => {
  const mail = useSelector((state) => state.signIn.mail);
  const password = useSelector((state) => state.signIn.password);
  return (
    <div className={style.userConnect}>
      <h1 className={style.userConnect__title}> Connexion</h1>
      <form className={style.userConnect__form}>
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
          buttonName="Se Connecter"
          classCSS={style.userConnect__form__button}
        />

      </form>
    </div>
  );
};
export default UserConnect;
