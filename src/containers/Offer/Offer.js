import ImageGallery from 'react-image-gallery';
import style from './Offer.module.scss';
// import files

// import components
import BoardDatas from '../BoardDatas';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

const Offer = () => {
  const images = [
    {
      original: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      thumbnail: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
    },
    {
      original: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      thumbnail: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
    },
    {
      original: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      thumbnail: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
    },
    {
      original: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      thumbnail: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
    },
    {
      original: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      thumbnail: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
    },
  ];

  return (
    <div className={style.Offer}>
      <div className={style.Offer__containerLeft}>
        <div className={style.Offer__containerLeft__content}>
          <div className={style.Offer__containerLeft__content__mainPicture}>
            <img className={style.Offer__containerLeft__content__mainPicture__picture} src={images[0].original} alt="Principale" />
          </div>
          <div className={style.Offer__containerLeft__content__description}>
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
        <div className={style.Offer__sub}>
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
      <div className={style.Offer__container__right}>
        <BoardDatas />
      </div>
    </div>
  );
};

export default Offer;
