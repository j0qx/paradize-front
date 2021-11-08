import { ButtonSubmit } from '../../components';
import style from './UserSettings.module.scss';

const UserSettings = () => (
  <div className={style.userSettings__main}>

    <div className={style.userSettings__second}>
      <div className={style.userSettings__second__buttons}>
        <ButtonSubmit
          classCSS="usersettingsbutton"
          buttonName="Se déconnecter"
        />
        <ButtonSubmit
          classCSS="usersettingsbutton"
          buttonName=" Désactiver ce compte"
        />
      </div>
    </div>
  </div>
);
export default UserSettings;
