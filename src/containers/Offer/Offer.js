/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ImageGallery from 'react-image-gallery';
import style from './Offer.module.scss';
// import files

// import components
import BoardDatas from '../BoardDatas';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

const Offer = () => {
  const isMobile = window.screen.width < 500;
  const { id } = useParams();
  // recuperation du state
  const CardOffers = useSelector((state) => state.offers.cardOffers);

  // find pour recuperer l'id du user
  const offer = CardOffers.find((element) => element.id === id);
  offer.pictures = offer.picture.map((image) => ({
    original: `http://localhost:3333/${image}`,
    thumbnail: `http://localhost:3333/${image}`,
    originalHeight: 350,
  }));
  console.log('une offre', offer);

  return (
    <div className={style.Offer}>
      <div className={style.Offer__containerLeft}>
        <div className={style.Offer__containerLeft__content}>
          <div className={style.Offer__containerLeft__content__description}>
            <p className={style.Offer__containerLeft__content__title}>{offer.title}</p>
            <p className={style.Offer__containerLeft__content__description__description}> {offer.description}</p>
          </div>
        </div>

        <div className={style.Offer__sub}>
          <ImageGallery
            items={offer.pictures}
            originalWidth="200"
            slideInterval="5000"
            thumbnailHeight="200"
            showBullets="true"
            autoPlay="true"
          />
          <p className={style.Offer__sub__content}>652000€</p>
        </div>
      </div>
      <div className={style.Offer__container__right}>
        <BoardDatas />
      </div>
    </div>
  );
};

export default Offer;
