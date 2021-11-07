/* eslint-disable no-trailing-spaces */
import style from './CardOffer.module.scss';
// import files
import house from '../../assets/image/house.jpg';
// import components
import BoardDatas from '../../containers/BoardDatas';

const CardOffer = () => {
  const toto = 'tata';

  return (
    <div className={style.cardOffer}>
      <div className={style.cardOffer__containerLeft}>
        <div className={style.cardOffer__containerLeft__content}>
          <div className={style.cardOffer__containerLeft__content__mainPicture}>
            <img className={style.cardOffer__containerLeft__content__mainPicture__picture} src={house} alt="Principale" />
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
          <div className={style.cardOffer__sub__content}>
            <img className={style.cardOffer__sub__content__picture} src={house} alt="Principale" />
          </div>
          <div className={style.cardOffer__sub__all__pictures}>
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
            <img className={style.cardOffer__sub__all__picture} src={house} alt="Principale" />
          </div>
        </div>
      </div>
      <div className={style.cardOffer__container__right}>
        <BoardDatas />
      </div>
    </div>
  );
};

export default CardOffer;
