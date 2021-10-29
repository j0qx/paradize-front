import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './UserConnect.module.scss';

const UserConnect = () => (
  <div className={style.userConnect}>
    <h1 className={style.userConnect__title}> Créer un compte</h1>
    <form className={style.userConnect__form}>
      <div className={style.userConnect__inputContainer}>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          type="text"
          className={style.userConnect__input}
          placeholder="Nom"
        />
      </div>
      <div className={style.userConnect__inputContainer}>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          type="text"
          className={style.userConnect__input}
          placeholder="Prénom"
        />
      </div>
      <div className={style.userConnect__inputContainer}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input
          type="text"
          className={style.userConnect__input}
          placeholder="Email"
        />
      </div>
      <div className={style.userConnect__inputContainer}>
        <div>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <input
          type="text"
          className={style.userConnect__input}
          placeholder="Mot de passe"
        />
      </div>
    </form>
  </div>
);
export default UserConnect;
