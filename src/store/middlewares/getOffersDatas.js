import axios from 'axios';

import {
  GET_OFFERS_DATAS,
  READ_OFFERS_DATAS,
} from '../actions';

import url from '../graphql/endpoint';
import { getOffersDatas } from '../graphql/queries';
// here is the middleware who will work with all the offers request.
const getOffersMiddleware = (store) => (next) => (action) => {
  //  Get offer Data from bdd.
  if (action.type === GET_OFFERS_DATAS) {
    const state = store.getState();

    // on prépare la requete
    const config = {
      method: 'post',
      url,
      data: {
        query: getOffersDatas(
        ),
      },
    };
    // we play axios request
    axios(config)

      // if success
      .then(({ data }) => {
        console.log('data_offers:', data.data.offers);
        store.dispatch({
          type: READ_OFFERS_DATAS,
          cardOffers: data.data.offers,
        });
        console.log(data.data.offers);
      })
      // if error
      .catch((error) => {
        console.log(error);
        // store.dispatch({ type: GET_USER_TOKEN_ERROR });
      });
  }
  else {
    next(action);
  }
};

export default getOffersMiddleware;
