/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import Avatar from 'avataaars';
import style from './UserInfo.module.scss';
import { InputBase } from '../../components';
import ButtonSubmit from '../../components/ButtonSubmit';
import { TOGGLE_INPUT_ACCOUNT, MODIFY_USER_DATAS } from '../../store/actions';

const UserInfo = () => {
  const dispatch = useDispatch();
  const isInputHidden = useSelector((state) => state.account.display.isInputHidden);
  const isMobile = window.screen.width < 500;
  const isDesktop = window.screen.width > 500;
  const {
    inputValueLastName,
    inputValueFirstName,
    inputValueNickName,
    inputValueEmail,
    inputValuePhone,
    inputValueAddress,
    inputValuePostalCode,
    inputValueCity,
  } = useSelector((state) => state.account.toUpdate);

  const {
    username,
    id,
    first_name,
    last_name,
    email,
    address,
    city_code,
    city,
    phone,
    avatar,
  } = useSelector((state) => state.user);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch({ type: MODIFY_USER_DATAS });
  };
  return (

    <div className={style.userinfo__main}>
      <div className={style.userinfo__second}>
        <div className={style.userinfo__second__left}>
          {isMobile && (
          <Avatar
            style={{ width: '250px', height: '250px' }}
            avatarStyle="Circle"
            topType="LongHairDreads"
            accessoriesType="Sunglasses"
            hairColor="BrownDark"
            facialHairType="BeardLight"
            facialHairColor="BrownDark"
            clotheType="BlazerShirt"
            eyeType="Happy"
            eyebrowType="Default"
            mouthType="Smile"
            skinColor="Light"
          />
          )}
          {isDesktop && (
          <Avatar
            style={{ width: '250px', height: '250px' }}
            avatarStyle="Circle"
            topType="LongHairDreads"
            accessoriesType="Sunglasses"
            hairColor="BrownDark"
            facialHairType="BeardLight"
            facialHairColor="BrownDark"
            clotheType="BlazerShirt"
            eyeType="Happy"
            eyebrowType="Default"
            mouthType="Smile"
            skinColor="Light"
          />
          )}
          <div className={style.userinfo__second__right__inputs__button} />
        </div>

        {(isInputHidden === true) && (

          <div className={style.userinfo__second__right__inputs}>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Nom  <span>{last_name}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Prénom <span>{first_name}</span></h4>

            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Pseudo <span>{username}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Email <span>{email}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Téléphone <span>{phone}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Adresse   <span>{address}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Code postal <span>{city_code}</span></h4>
            </div>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__text}>Ville <span>{city} </span></h4>
            </div>
            <form>
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
          onSubmit={(event) => {
            handleSubmitForm(event);
          }}
          className={style.form}
        >
          <div className={style.userinfo__second__right__inputs}>
            <div className={style.userinfo__second__right__inputs__input}>
              <h4 className={style.text__input}>Nom</h4>
              <InputBase
                type="text"
                inputName="inputValueLastName"
                placeholder={last_name}
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
                placeholder={first_name}
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
                placeholder={username}
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
                placeholder={email}
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
                placeholder={phone}
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
                placeholder={address}
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
                placeholder={city_code}
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
                placeholder={city}
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
                  dispatch({ type: MODIFY_USER_DATAS });
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
