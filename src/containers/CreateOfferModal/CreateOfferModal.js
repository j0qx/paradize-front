/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
// import REACT COMPONENT
import Switch from 'react-switch';
// Import COMPONENT
import { ButtonSubmit, InputBase } from '../../components';
import {
  GET_USER_TOKEN_SUCCESS, CHANGE_INPUT_VALUE_OFFERS, TOGGLE_ONLINE_OFFER,
} from '../../store/actions';
import style from './CreateOfferModal.module.scss';
import AutoComplete from '../../components/Autocomplete/Autocomplete';

const CreateOfferModal = ({ classCSS }) => {
  const title = useSelector((state) => state.offers.inputValueTitle);
  const picture = useSelector((state) => state.offers.inputValuePicture);
  const description = useSelector((state) => state.offers.inputValueDescription);
  const status = useSelector((state) => state.offers.isOfferOnline);
  const coordinateLat = useSelector((state) => state.offers.inputValueLatCoordinate);
  const coordinateLong = useSelector((state) => state.offers.inputValueLongCoordinate);
  const dispatch = useDispatch();
  const filteredSuggestions = useSelector((state) => state.search.autoComplete.filteredSuggestions);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch({ type: GET_USER_TOKEN_SUCCESS });
  };

  const handleChangeToggle = () => {
    dispatch({ type: TOGGLE_ONLINE_OFFER });
  };
  return (
    <div className={style.CreateOfferModal}>
      <h2 className={style.CreateOfferModal__intro}> Création d'une Annonce</h2>
      <form
        className={style.CreateOfferModal__form}
        onSubmit={handleSubmitForm}
      >
        <div className={style.CreateOfferModal__form__toggleLine}>
          <h3> Status de l'annonce</h3>
          <div className={style.CreateOfferModal__form__toggle__toggle}>
            <Switch
              onChange={handleChangeToggle}
              checked={status}
              offColor="#ea0707"
              onColor="#9DBDB2"
              offHandleColor="#ea6262"
              onHandleColor="#406F8A"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              className="switch"
              height={20}
              width={48}
            />
          </div>
          <p> L'annonce est <h4>{status ? 'en ligne' : 'hors-ligne'}</h4></p>
        </div>
        <div className={style.CreateOfferModal__inputs}>
          <InputBase
            inputName="title"
            placeholder=" Titre de l'annonce.."
            classCSS="input__createOffer__modal"
            inputValue={title}
            action={CHANGE_INPUT_VALUE_OFFERS}
          />
          <InputBase
            inputName="description"
            placeholder=" Description de l'annonce.."
            classCSS="input__createOffer__modal"
            inputValue={description}
            action={CHANGE_INPUT_VALUE_OFFERS}
          />
          <AutoComplete />
          {/* <InputBase
            inputName="coordinateLat"
            placeholder=" Latitude de l'annonce.."
            classCSS="input__createOffer__modal"
            inputValue={coordinateLat}
            action={CHANGE_INPUT_VALUE_OFFERS}
          />
          <InputBase
            inputName="coordinateLong"
            placeholder=" Longitude de l'annonce.."
            classCSS="input__createOffer__modal"
            inputValue={coordinateLong}
          /> */}
        </div>
        <ButtonSubmit
          buttonName="Créer l'annonce"
          classCSS={style.CreateOfferModal__form__button}
        />
      </form>

    </div>
  );
};
export default CreateOfferModal;
