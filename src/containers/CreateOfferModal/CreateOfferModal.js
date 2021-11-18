/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
// import REACT COMPONENT
import Switch from 'react-switch';
// Import COMPONENT
import ImageGallery from 'react-image-gallery';
import { ButtonSubmit, InputBase } from '../../components';
import {
  CHANGE_INPUT_VALUE_OFFERS,
  TOGGLE_ONLINE_OFFER,
  CREATE_OFFER,
  SET_PICTURES,
} from '../../store/actions';
import housePhoto from '../../assets/image/house-gebf9565a0_640.jpg';
import AutoComplete from '../../components/Autocomplete/Autocomplete';
import UploadImages from '../../components/UploadImages/UploadImages';
import style from './CreateOfferModal.module.scss';

const CreateOfferModal = () => {
  const title = useSelector((state) => state.offers.inputValueTitle);
  const pictures = useSelector((state) => state.offers.pictures);
  const description = useSelector((state) => state.offers.inputValueDescription);
  const price = useSelector((state) => state.offers.inputValuePrice);
  const status = useSelector((state) => state.offers.isOfferOnline);
  const dispatch = useDispatch();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch({ type: CREATE_OFFER });
    dispatch({ type: 'RESET_INDEX' });
  };
  const handleChangeToggle = () => {
    dispatch({ type: TOGGLE_ONLINE_OFFER });
    console.log(pictures);
  };
  const defaulPicture = [{
    original: housePhoto,
    thumbnail: housePhoto,
    originalHeight: 250,
  }, {
    original: housePhoto,
    thumbnail: housePhoto,
    originalHeight: 250,
  }];
  // if the user has imported pictures we set these value in an array, if not
  // importedPictures value is undefined
  const importedPictures = pictures.length > 0 ? pictures.map((image) => ({
    original: `https://oparadise-back.herokuapp.com/${image}`,
    thumbnail: `https://oparadise-back.herokuapp.com/${image}`,
    originalHeight: 250,
  })) : undefined;

  return (
    <div className={style.hello}>
      <h2 className={style.intro}> Création d'une Annonce</h2>
      <div className={style.CreateOfferModal}>
        <div className={style.container}>
          <ImageGallery
            items={importedPictures || defaulPicture}
            originalWidth="250"
            slideInterval="5000"
            thumbnailHeight="250"
            showBullets="true"
            autoPlay="true"
          />
          <UploadImages
            labelButton="importer vos images"
            dispatchToRedux={{ type: SET_PICTURES, keyName: 'pictures' }}
          />
        </div>
        <form
          className={style.CreateOfferModal__form}
          onSubmit={handleSubmitForm}
        >
          <div className={style.CreateOfferModal__form__toggleLine}>
            <div className={style.toggle_container}>
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
            </div>
            <p> L'annonce est <span>{status ? 'en ligne' : 'hors-ligne'}</span></p>
          </div>
          <div className={style.CreateOfferModal__inputs}>
            <InputBase
              inputName="inputValueTitle"
              placeholder=" Titre de l'annonce.."
              classCSS="input__createOffer__modal"
              inputValue={title}
              actionType={CHANGE_INPUT_VALUE_OFFERS}
            />
            <textarea
              placeholder=" Description de l'annonce.."
              value={description}
              onChange={(event) => {
                dispatch({
                  type: CHANGE_INPUT_VALUE_OFFERS,
                  inputField: 'inputValueDescription',
                  newValue: event.target.value,
                });
              }}
            />
            <InputBase
              inputName="inputValuePrice"
              placeholder="Prix du bien"
              classCSS="input__createOffer__modal"
              inputValue={price}
              actionType={CHANGE_INPUT_VALUE_OFFERS}
            />
            <AutoComplete />
          </div>
          <ButtonSubmit
            buttonName="Créer l'annonce"
            classCSS={style.CreateOfferModal__form__button}
          />
        </form>

      </div>
    </div>
  );
};
export default CreateOfferModal;
