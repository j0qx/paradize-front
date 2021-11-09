import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonSubmit, InputBase } from '../../components';
import { GET_USER_TOKEN, CHANGE_INPUT_VALUE_SIGNIN } from '../../store/actions';
import style from './UserConnect.module.scss';

const UserConnect = () => {
  const mail = useSelector((state) => state.signIn.mail);
  const password = useSelector((state) => state.signIn.password);
  const dispatch = useDispatch();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch({ type: GET_USER_TOKEN });
  };
  return (
    <div className={style.userConnect}>
      <h1 className={style.userConnect__title}> Connexion</h1>
      <form
        className={style.userConnect__form}
        onSubmit={handleSubmitForm}
      >
        <InputBase
          icon={faEnvelope}
          inputName="mail"
          placeholder="Mail"
          classCSS=""
          inputValue={mail}
          actionType={CHANGE_INPUT_VALUE_SIGNIN}
        />
        <InputBase
          icon={faLock}
          inputName="password"
          inputType="password"
          placeholder="Mot de passe"
          classCSS=""
          inputValue={password}
          actionType={CHANGE_INPUT_VALUE_SIGNIN}
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
