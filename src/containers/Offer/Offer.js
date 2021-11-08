import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import style from './Offer.module.scss';
// import files

// import components
import BoardDatas from '../BoardDatas';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

const Offer = ({
  title, subTitle, description, price,
}) => {
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

  const { id } = useParams();

  return (
    <div className={style.Offer}>
      <div className={style.Offer__containerLeft}>
        <div className={style.Offer__containerLeft__content}>
          <div className={style.Offer__containerLeft__content__mainPicture}>
            <img className={style.Offer__containerLeft__content__mainPicture__picture} src={images[0].original} alt="Principale" />
          </div>
          <div className={style.Offer__containerLeft__content__description}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p> {description}</p>
            <h3>{price}</h3>
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

Offer.defaultProps = {
  title: ' La Motte',
  subTitle: ' Maison à vendre',
  description: "superbe maison au bord LA MOTTE - Cadre naturel ! Au calme absolu, en fond dimpasse et dans un quartier très recherché, villa de qualité de construction traditionnelle offrant 6 pièces 167m² habitables et se composant d'une cuisine indépendante aménagée et équipée, buanderie, salon-salle à manger avec mezzanine, 1 chambre... la mer superbe maison au bord de la mer  superbe maison au bord de la mer",
  price: '748 000 €',
};
export default Offer;
