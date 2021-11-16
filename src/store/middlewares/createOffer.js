import axios from 'axios';
import {
  CREATE_OFFER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from '../actions';

import url from '../graphql/endpoint';
import { createOffer } from '../graphql/queries';

const createOfferMiddleware = (store) => (next) => (action) => {
  if (action.type === CREATE_OFFER) {
    const state = store.getState();
    const config = {
      method: 'post',
      url,
      data: {
        query: createOffer(
          state.offers.inputValueTitle,
          state.offers.inputValueDescription,
          state.offers.isOfferOnline,
          state.user.id,
          state.offers.password,
        ),
      },
    };
    axios(config)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  else {
    next(action);
  }
};

export default createOfferMiddleware;
