import style from './UserInfo.module.scss';
import photo from '../../assets/image/ile.png';
import { TabNavBar, InputBase } from '../../components';

const UserInfo = () => (
  <div className={style.userinfo__main}>
    <TabNavBar />
    <div className={style.userinfo__second}>
      <div className={style.userinfo__second__left}>
        <img className={style.userinfo__second__left__avatar} src={photo} alt="" />
      </div>
      <div className={style.userinfo__second__right__inputs}>
        <form>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Nom :</h4>
            <InputBase
              inputName="Nom"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Nom"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Prénom:</h4>
            <InputBase
              inputName="Prénom"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Prénom"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Pseudo:</h4>
            <InputBase
              inputName="Pseudo"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Pseudo"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Email:</h4>
            <InputBase
              inputName="Email"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Email"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Téléphone:</h4>
            <InputBase
              inputName="Téléphone"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Téléphone"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Adresse :</h4>
            <InputBase
              inputName="Adresse"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Adresse"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Code postal:</h4>
            <InputBase
              inputName="Code postal"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Code postal"
            />
          </div>
          <div className={style.userinfo__second__right__inputs__input}>
            <h4>Ville:</h4>
            <InputBase
              inputName="Ville"
              placeholder=""
              classCSS="input__userinfo"
              inputValue="Ville"
            />
          </div>
        </form>
      </div>
    </div>

  </div>
);
export default UserInfo;
