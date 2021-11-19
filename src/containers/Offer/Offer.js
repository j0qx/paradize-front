/* eslint-disable max-len */
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import style from './Offer.module.scss';
// import files

// import components
import BoardDatas from '../BoardDatas';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import BackButton from '../../components/BackButton';
import { TOGGLE_OPEN_SLIDE } from '../../store/actions';

const Offer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const isMobile = window.screen.width < 500;
  const { id } = useParams();
  // recuperation du state
  const CardOffers = useSelector((state) => state.offers.cardOffers);
  const isRightSlideOpen = useSelector((state) => state.domSettings.isRightSlideOpen);
  const isLeftSlideOpen = useSelector((state) => state.domSettings.isLeftSlideOpen);
  // find pour recuperer l'id du user
  const offer = CardOffers.find((element) => element.id === id);

  offer.pictures = offer.picture.map((image) => ({
    original: `https://oparadise-back.herokuapp.com/${image}`,
    thumbnail: `https://oparadise-back.herokuapp.com/${image}`,

    originalHeight: 350,
  }));

  return (
    <div className={style.Offer}>
      { isMobile
            && (
            <Link to="/explore">
              <BackButton
                value="retour à la carte"
                classCss="back__map__button"
                handleButtonClick={() => {
                  if (isRightSlideOpen === false) {
                    dispatch({
                      type: TOGGLE_OPEN_SLIDE,
                      slide: 'isRightSlideOpen',
                    });
                  }
                  if (isLeftSlideOpen === false) {
                    dispatch({
                      type: TOGGLE_OPEN_SLIDE,
                      slide: 'isLeftSlideOpen',
                    });
                  }
                }}
              />
            </Link>
            )}
      <div className={style.Offer__containerLeft}>
        <div className={style.Offer__containerLeft__content}>
          <p className={style.Offer__sub__content}>{offer.price} €</p>
          <div className={style.Offer__containerLeft__content__description}>
            <p className={style.Offer__containerLeft__content__title}>{offer.title}</p>
            <p className={style.Offer__containerLeft__content__description__description}> {offer.description}</p>
            { !isMobile
            && (
            <Link to="/explore">
              <BackButton
                value="retour à la carte"
                classCss="back__map__button"
                handleButtonClick={() => {
                  if (isRightSlideOpen === false) {
                    dispatch({
                      type: TOGGLE_OPEN_SLIDE,
                      slide: 'isRightSlideOpen',
                    });
                  }
                  if (isLeftSlideOpen === false) {
                    dispatch({
                      type: TOGGLE_OPEN_SLIDE,
                      slide: 'isLeftSlideOpen',
                    });
                  }
                }}
              />
            </Link>
            )}
          </div>
        </div>

        <div className={style.Offer__sub}>
          <ImageGallery
            items={offer.pictures}
            originalWidth="350"
            originalHeight="400"
            slideInterval="5000"
            thumbnailHeight="200"
            showBullets="true"
            autoPlay="true"

          />

        </div>
      </div>
      <div className={style.Offer__container__right}>
        <BoardDatas />
      </div>
    </div>
  );
};

export default Offer;
