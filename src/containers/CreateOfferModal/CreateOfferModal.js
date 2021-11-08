import { useSelector, useDispatch } from 'react-redux';
// import REACT COMPONENT
import Switch from 'react-switch';
// Import COMPONENT
import { ButtonSubmit, InputBase } from '../../components';
import { GET_USER_TOKEN_SUCCESS, CHANGE_INPUT_VALUE_OFFERS, TOGGLE_ONLINE_OFFER } from '../../store/actions';
import style from './CreateOfferModal.module.scss';

const CreateOfferModal = () =>
//
{
  const title = useSelector((state) => state.offers.inputValueTitle);
  const picture = useSelector((state) => state.offers.inputValuePicture);
  const description = useSelector((state) => state.offers.inputValueDescription);
  const status = useSelector((state) => state.offers.isOfferOnline);
  const coordinateLat = useSelector((state) => state.offers.inputValueLatCoordinate);
  const coordinateLong = useSelector((state) => state.offers.inputValueLongCoordinate);
  const dispatch = useDispatch();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch({ type: GET_USER_TOKEN_SUCCESS });
  };

  const handleChangeToggle = (event) => {
    event.preventDefault();
    dispatch({ type: TOGGLE_ONLINE_OFFER });
  };
  return (
    <div className={style.CreateOfferModal}>
      <h1 className={style.CreateOfferModal__intro}> Création d'une Annonces</h1>
      <form
        className={style.CreateOfferModal__form}
        onSubmit={handleSubmitForm}
      >
        <div className={style.CreateOfferModal__form__toggle}>
          <span> Mise en ligne de l'annonce</span>
          <Switch
            onChange={handleChangeToggle}
            checked={status}
            onColor="#ea0707"
            onHandleColor="#406F8A"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
          <p> L'annonce est <span>{status ? 'en ligne' : 'hors-ligne'}</span></p>
        </div>
        <InputBase
          inputName="title"
          placeholder=" Titre de l'annonce.."
          classCss=""
          inputValue={title}
          action={CHANGE_INPUT_VALUE_OFFERS}
        />
        <InputBase
          inputName="description"
          placeholder=" Description de l'annonce.."
          classCss=""
          inputValue={description}
          action={CHANGE_INPUT_VALUE_OFFERS}
        />
        <InputBase
          inputName="coordinateLat"
          placeholder=" Latitude de l'annonce.."
          classCss=""
          inputValue={coordinateLat}
          action={CHANGE_INPUT_VALUE_OFFERS}
        />
        <InputBase
          inputName="coordinateLong"
          placeholder=" Longitude de l'annonce.."
          classCss=""
          inputValue={coordinateLong}
        />
        <ButtonSubmit
          buttonName="Créer l'annonce"
          classCSS={style.CreateOfferModal__form__button}
        />
      </form>

    </div>
  );
};
export default CreateOfferModal;
