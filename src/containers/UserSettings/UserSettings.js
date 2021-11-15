import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonSubmit } from '../../components';
import style from './UserSettings.module.scss';

const UserSettings = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.userSettings__main}>
      <div className={style.userSettings__second}>
        <div className={style.userSettings__second__buttons}>
          <Link to="/">
            <ButtonSubmit
              classCSS="usersettingsbutton"
              buttonName=" Désactiver ce compte"
              onClick={() => {

              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserSettings;
