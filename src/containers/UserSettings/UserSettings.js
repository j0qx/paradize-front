import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import { ButtonSubmit } from '../../components';
import style from './UserSettings.module.scss';

const UserSettings = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.userSettings__main}>

      <div className={style.userSettings__second}>
        <div className={style.userSettings__second__buttons}>
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
