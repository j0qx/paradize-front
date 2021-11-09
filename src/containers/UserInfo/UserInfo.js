import { useSelector, useDispatch } from 'react-redux';
import style from './UserInfo.module.scss';
import photo from '../../assets/image/house.jpg';
import { InputBase } from '../../components';
import ButtonSubmit from '../../components/ButtonSubmit';
import { TOGGLE_INPUT_ACCOUNT } from '../../store/actions';

const UserInfo = () => {
  const dispatch = useDispatch();
  const isInputHidden = useSelector((state) => state.account.isInputHidden);
  const inputValueLastName = useSelector((state) => state.account.inputValueLastName);
  const inputValueFirstName = useSelector((state) => state.account.inputValueFirstName);
  const inputValueNickName = useSelector((state) => state.account.inputValueNickName);
  const inputValueEmail = useSelector((state) => state.account.inputValueEmail);
  const inputValuePhone = useSelector((state) => state.account.inputValuePhone);
  const inputValueAddress = useSelector((state) => state.account.inputValueAddress);
  const inputValuePostalCode = useSelector((state) => state.account.inputValuePostalCode);
  const inputValueCity = useSelector((state) => state.account.inputValueCity);

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };
  return (

    <div className={style.userinfo__main}>
      <div className={style.userinfo__second}>
        <div className={style.userinfo__second__left}>
          <img className={style.userinfo__second__left__avatar} src={photo} alt="" />
          <div className={style.userinfo__second__right__inputs__button}>
            <ButtonSubmit
              buttonName="Télecharger votre Avatar"
              classCSS=""
            />
          </div>
        </div>

        {(isInputHidden === true) && (

          <div className={style.userinfo__second__right__inputs}>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Nom  <span>{inputValueLastName}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Prénom <span>{inputValueFirstName}</span></h4>

            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Pseudo <span>{inputValueNickName}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Email <span>{inputValueEmail}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Téléphone <span>{inputValuePhone}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Adresse   <span>{inputValueAddress}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Code postal <span>{inputValuePostalCode}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Ville <span>{inputValueCity} </span></h4>
            </div>
            <form
              onSubmit={handleSubmitForm}
            >
              <div className={style.userinfo__second__right__inputs__button}>
                <ButtonSubmit
                  buttonName="Modifier vos Informations..."
                  classCSS=""
                  handleButtonClick={() => {
                    if (isInputHidden === false) {
                      return;
                    }
                    dispatch({ type: TOGGLE_INPUT_ACCOUNT });
                  }}
                />
              </div>
            </form>
          </div>

        )}

        {(isInputHidden === false) && (

        <form
          onSubmit={handleSubmitForm}
          className={style.form}
        >
          <div className={style.userinfo__second__right__inputs}>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__input}>Nom</h4>
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
              <h4 className={style.text__input}>Prénom</h4>
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
              <h4 className={style.text__input}>Pseudo</h4>
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
              <h4 className={style.text__input}>Email</h4>
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
              <h4 className={style.text__input}>Téléphone</h4>
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
              <h4 className={style.text__input}>Adresse </h4>
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
              <h4 className={style.text__input}>Code postal</h4>
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
              <h4 className={style.text__input}>Ville</h4>
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
                handleButtonClick={() => {
                  if (isInputHidden === true) {
                    return;
                  }
                  dispatch({ type: TOGGLE_INPUT_ACCOUNT });
                }}
              />
            </div>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};
export default UserInfo;
