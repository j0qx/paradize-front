import axios from 'axios';
import {
  CREATE_OFFER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from '../actions';

import url from '../graphql/endpoint';
import { createOffer } from '../graphql/queries';

const createUserMiddleware = (store) => (next) => (action) => {
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
          state.offers.id,
          state.offers.password,
        ),
      },
    };
  }
  else {
    next(action);
  }
};

export default createUserMiddleware;
