import style from './UserInfo.module.scss';
import { TabNavBar, InputBase } from '../../components';

const UserInfo = () => (
  <div className={style.userinfo__main}>
    <TabNavBar />
    <div className={style.userinfo__second}>
      <div className={style.userinfo__second__avatar}>
        <img src="" alt="" />
      </div>
      <div className={style.userinfo__second__inputs}>
        <form>
          <InputBase
            inputName="Nom"
            placeholder="Nom"
            classCSS=""
            inputValue="Nom"
          />
          <InputBase
            inputName="Prénom"
            placeholder="Prénom"
            classCSS=""
            inputValue="Prénom"
          />
          <InputBase
            inputName="Pseudo"
            placeholder="Pseudo"
            classCSS=""
            inputValue="Pseudo"
          />
          <InputBase
            inputName="Email"
            placeholder="Email"
            classCSS=""
            inputValue="email"
          />
          <InputBase
            inputName="Telephone"
            placeholder="Telephone"
            classCSS=""
            inputValue="Telephone"
          />
          <InputBase
            inputName="Adresse"
            placeholder="Adresse"
            classCSS=""
            inputValue="Adresse"
          />
          <InputBase
            inputName="Code postal"
            placeholder="Code postal"
            classCSS=""
            inputValue="Code postal"
          />
          <InputBase
            inputName="Ville"
            placeholder="Ville"
            classCSS=""
            inputValue="Ville"
          />
        </form>
      </div>
    </div>

  </div>
);
export default UserInfo;
