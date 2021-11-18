import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyOffer.module.scss';
import { TOGGLE_PRINT_MODAL, SET_MODAL_CONTENT } from '../../store/actions';
import MyOffers from '../../components/MyOffers/MyOffers';

const MyOffer = () => {
  const dispatch = useDispatch();
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);
  const isMobile = window.screen.width < 500;
  const isDesktop = window.screen.width > 500;
  return (
    <div className={style.createOffer__main}>
      <div className={style.createOffer__second}>
        <div className={style.createOffer__second__left}>
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
          {isMobile && (
          <h3 className={style.title}>N'hésitez plus ! <br /> Créer votre  annonce..</h3>

          )}
          {isDesktop && (
          <h3 className={style.title}>N'hésitez plus !  Créer votre  annonce..</h3>

          )}
        </div>
        <div className={style.createOffer__second__right}>
          <MyOffers />
        </div>
      </div>
    </div>
  );
};

export default MyOffer;
