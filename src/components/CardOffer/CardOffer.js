import style from './CardOffer.module.scss';

const CardOffer = ({
  title, description, picture, subTitle, price,
}) => (
  <div className={style.offer}>
    <img className={style.offer__picture} src={picture} alt={title} />
    <div className={style.offer__content}>
      <div className={style.offer__content__title}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </div>
      <div className={style.offer__content__description}>
        <p>{description}</p>
      </div>
      <div className={style.offer__content__price}>
        <h3>{price}</h3>
      </div>
    </div>
  </div>
);

export default CardOffer;
