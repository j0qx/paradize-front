import { useSelector } from 'react-redux';
import style from './UserInfo.module.scss';
import photo from '../../assets/image/ile.png';
import { TabNavBar, InputBase } from '../../components';
import ButtonSubmit from '../../components/ButtonSubmit';

const UserInfo = () => {
  const inputValueLastName = useSelector((state) => state.account.inputValueLastName);
  const inputValueFirstName = useSelector((state) => state.account.inputValueFirstName);
  const inputValueNickName = useSelector((state) => state.account.inputValueNickName);
  const inputValueEmail = useSelector((state) => state.account.inputValueEmail);
  const inputValuePhone = useSelector((state) => state.account.inputValuePhone);
  const inputValueAddress = useSelector((state) => state.account.inputValueAddress);
  const inputValuePostalCode = useSelector((state) => state.account.inputValuePostalCode);
  const inputValueCity = useSelector((state) => state.account.inputValueCity);

  return (

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
                type="text"
                inputName="inputValueLastName"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValueLastName}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Prénom:</h4>
              <InputBase
                type="text"
                inputName="inputValueFirstName"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValueFirstName}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Pseudo:</h4>
              <InputBase
                type="text"
                inputName="inputValueNickName"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValueNickName}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Email:</h4>
              <InputBase
                type="text"
                inputName="inputValueEmail"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValueEmail}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Téléphone:</h4>
              <InputBase
                type="text"
                inputName="inputValuePhone"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValuePhone}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Adresse :</h4>
              <InputBase
                type="text"
                inputName="inputValueAddress"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValueAddress}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Code postal:</h4>
              <InputBase
                type="text"
                inputName="inputValuePostalCode"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValuePostalCode}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4>Ville:</h4>
              <InputBase
                type="text"
                inputName="inputValueCity"
                placeholder=""
                classCSS="input__userinfo"
                inputValue={inputValueCity}
                actionType="CHANGE_INPUT_VALUE_ACCOUNT"
              />
            </div>
            <div className={style.userinfo__second__right__inputs__button}>
              <ButtonSubmit
                buttonName="Appliquer les changements..."
                classCSS=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
