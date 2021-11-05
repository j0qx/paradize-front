/* eslint-disable no-trailing-spaces */
import ImageGallery from 'react-image-gallery';
import style from './CardOffer.module.scss';
// import files

// import components
import BoardDatas from '../../containers/BoardDatas';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import image from '../../assets/image/house.jpg';
import image2 from '../../assets/image/house.jpg';
import image3 from '../../assets/image/house.jpg';
import image4 from '../../assets/image/house.jpg';
import image5 from '../../assets/image/house.jpg';

const CardOffer = () => {
  const images = [
    {
      original: image,
      thumbnail: image, 
    },
    {
      original: image2,
      thumbnail: image2, 
    },
    {
      original: image3,
      thumbnail: image, 
    }, 
    {
      original: image4,
      thumbnail: image4, 
    }, 
    {
      original: image5,
      thumbnail: image, 
    }, 
  ];

  return (
    <div className={style.cardOffer}>
      <div className={style.cardOffer__containerLeft}>
        <div className={style.cardOffer__containerLeft__content}>
          <div className={style.cardOffer__containerLeft__content__mainPicture}>
            <img className={style.cardOffer__containerLeft__content__mainPicture__picture} src={image} alt="Principale" />
          </div>
          <div className={style.cardOffer__containerLeft__content__description}>
            <h2>Titre de l'annonce</h2>
            <h3>sous-titre de l'annonce</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum adipisci est, fugiat tempora quisquam, suscipit pariatur consequatur
              facere expedita voluptatibus nulla laudantium repellendus natus, ratione
              iure laboriosam neque quibusdam corporis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum adipisci est, fugiat tempora quisquam, suscipit pariatur consequatur
              facere expedita voluptatibus nulla laudantium repellendus natus, ratione
              iure laboriosam neque quibusdam corporis.
            </p>
          </div>
        </div>
        <div className={style.cardOffer__sub}>
          <ImageGallery
            items={images}
            originalHeight="200"
            slideInterval="4000"
            thumbnailHeight="200"
            showBullets="true"
            autoPlay="true"
          />
        </div>
      </div>
      <div className={style.cardOffer__container__right}>
        <BoardDatas />
      </div>
    </div>
  );
};

export default CardOffer;
