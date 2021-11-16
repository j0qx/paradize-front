import { useSelector } from 'react-redux';
import style from './ListCardOffer.module.scss';
import CardOffer from '../CardOffer';

const ListCardOffer = () => {
  const isLeftSlideOpen = useSelector((state) => state.domSettings.isLeftSlideOpen);
  const CardOffers = useSelector((state)=> state.offers.cardOffers);
  console.log(CardOffers);
  // need mapping on data to dysplay real offers;

  return (

    <div className={isLeftSlideOpen ? style.list__container : style.list__container_close}>
      <div className={style.list__container__main}>
        {
          CardOffers.map(({
            title, description, picture, status, price, id,
          }) => (
            <CardOffer
              title={title}
              description={description}
              status={status}
              picture={picture}
              price={price}
              key={id}
            />
          ))
        }
      </div>
    </div>
  );
};
export default ListCardOffer;
