import style from './ListCardOffer.module.scss';
import CardOffer from '../CardOffer';

// import files
import house from '../../assets/image/house.jpg';

const ListCardOffer = () => {
  const tata = 'toto';

// need mapping on data to dysplay real offers.

  return (
      
    <div className={style.list__container}>
      
      <div className={style.list__container__main}>
        <div className={style.list__container__main__offer}>
          <img className={style.list__container__main__offer__picture} src={house} alt="annonce" />
          <div className={style.list__container__main__offer__title}>
            <p>Nom de l'annonce</p>
          </div>
        </div>
        <div className={style.list__container__main__offer}>
          <img className={style.list__container__main__offer__picture} src={house} alt="annonce" />
          <div className={style.list__container__main__offer__title}>
            <p>Nom de l'annonce</p>
          </div>
        </div>
        <div className={style.list__container__main__offer}>
          <img className={style.list__container__main__offer__picture} src={house} alt="annonce" />
          <div className={style.list__container__main__offer__title}>
            <p>Nom de l'annonce</p>
          </div>
        </div>
        <div className={style.list__container__main__offer}>
          <img className={style.list__container__main__offer__picture} src={house} alt="annonce" />
          <div className={style.list__container__main__offer__title}>
            <p>Nom de l'annonce</p>
          </div>
        </div>
        <div className={style.list__container__main__offer}>
          <img className={style.list__container__main__offer__picture} src={house} alt="annonce" />
          <div className={style.list__container__main__offer__title}>
            <p>Nom de l'annonce</p>
          </div>
        </div>
        <div className={style.list__container__main__offer}>
          <img className={style.list__container__main__offer__picture} src={house} alt="annonce" />
          <div className={style.list__container__main__offer__title}>
            <p>Nom de l'annonce</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};
export default ListCardOffer;
