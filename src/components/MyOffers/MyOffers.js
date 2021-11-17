import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

import style from './MyOffers.module.scss';
import CardOffer from '../CardOffer';

const getOffersByUserAccountId = (id) => gql`
query {
offers(user_account_id: ${id}) {
  title
  picture
  id
  description
  status
  coordinate {
    latitude
    longitude
  }
  price
  owner {
    id
  }
}
}
`;
const MyOffers = () => {
  const idUser = useSelector((state) => (state.user.id));
  const { data, loading, error } = useQuery(getOffersByUserAccountId(idUser));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (data) {
    console.log(data.offers);
  }

  return (

    <div className={style.list__container}>
      <div className={style.list__container__main}>
        {
          data.offers.map(({
            title, description, picture, price, id,
          }) => (
            <CardOffer
              title={title}
              description={description}
              picture={picture}
              price={price}
              key={id}
              id={id}
            />
          ))
        }
      </div>
    </div>
  );
};
export default MyOffers;
