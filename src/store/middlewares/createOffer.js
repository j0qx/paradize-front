import axios from 'axios';
import {
  CREATE_OFFER,
  TOGGLE_PRINT_MODAL,
  SET_MODAL_CONTENT,
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
          state.offers.inputValueLatCoordinate,
          state.offers.inputValueLongCoordinate,
          state.offers.pictures,
          state.offers.inputValuePrice,
        ),
      },
    };
    axios(config)
      .then(() => {
        store.dispatch({ type: TOGGLE_PRINT_MODAL });
        store.dispatch(
          {
            type: SET_MODAL_CONTENT,
            modalContent: 'isOffersModal',
          },
        );
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
