import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './CardOffer.module.scss';

const CardOffer = ({
  title, description, picture, id, price,
}) => (
  <div className={style.offer}>
    <img className={style.offer__picture} src={picture} alt={title} />
    <div className={style.offer__content}>
      <div className={style.offer__content__title}>
        <h3>125000€</h3>
        <h4>{title}</h4>
      </div>
      <div className={style.offer__content__description}>
        <p className={style.offer__content__description__paragraph}>{description}</p>
      </div>
      <Link className={style.offer__content__moreinfo} to={`/offer/${id}`}> En savoir plus...</Link>
      <div className={style.offer__content__price} />
    </div>
  </div>
);

CardOffer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardOffer;
