import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './CardOffer.module.scss';

const CardOffer = ({
  title, description, picture, id,
}) => {
  if(picture) {
    const image = `http://localhost:3333/${picture[0]}`;
    console.log(image);
  }
  return(
  <div className={style.offer}>
    { picture
    && (
    <img
      className={style.offer__picture}
      src={`http://localhost:3333/${picture[0]}`}
      alt={title}
    />
    )}
    <div className={style.offer__content}>
      <div className={style.offer__content__title}>
        <h2>{title}</h2>
      </div>
      <div className={style.offer__content__description}>
        <p>{description}</p>
        <Link className={style.offer__content__moreinfo} to={`/offer/${id}`}> En savoir plus...</Link>
      </div>
      <div className={style.offer__content__price} />
    </div>
  </div>
);}
CardOffer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardOffer;
