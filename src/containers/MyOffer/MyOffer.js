import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyOffer.module.scss';
import { TOGGLE_PRINT_MODAL, SET_MODAL_CONTENT } from '../../store/actions';
import UploadImage from '../../components/UploadImage';
import UploadImages from '../../components/UploadImages';
import MyOffers from '../../components/MyOffers/MyOffers';

const MyOffer = () => {
  const dispatch = useDispatch();
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);

  return (
    <div className={style.createOffer__main}>
      <div className={style.createOffer__second}>
        <div className={style.createOffer__second__left}>
          <UploadImage labelButton="envoyer une image" />
          <UploadImages labelButton="envoyer plusieurs images" />
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="5x"
            color="#406F8A"
            onClick={() => {
              if (isModalHidden === false) {
                return;
              }
              // we print the modal
              dispatch({ type: TOGGLE_PRINT_MODAL });
              // we set which modal content do we want
              dispatch({ type: SET_MODAL_CONTENT, modalContent: 'isOffersModal' });
            }}
          />
          <h3>N'hésitez pas, créer votre propre annonce..</h3>
        </div>
        <div className={style.createOffer__second__right}>
          <MyOffers />
        </div>
      </div>
    </div>
  );
};

export default MyOffer;
