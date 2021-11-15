import axios from 'axios';
import {
  CREATE_USER,
  SET_MODAL_CONTENT,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from '../actions';

import url from '../graphql/endpoint';
import { createUser } from '../graphql/queries';

const createUserMiddleware = (store) => (next) => (action) => {
  if (action.type === CREATE_USER) {
    const state = store.getState();
    console.log(state.signUp);
    // on prépare la requete
    const config = {
      method: 'post',
      url,
      data: {
        query: createUser(
          state.signUp.username,
          state.signUp.lastName,
          state.signUp.firstName,
          state.signUp.mail,
          state.signUp.password,
        ),
      },
    };
    // on joue la requête avec axios
    axios(config)
      // si réussite
      .then((result) => {
        // If the current modal content was UserConnect, we set the state to false
        store.dispatch(
          {
            type: SET_MODAL_CONTENT,
            modalContent: 'isLoginModal',
          },
        );
        // If the current modal content was UserSubscribe, we set this state to fals
        store.dispatch(
          {
            type: SET_MODAL_CONTENT,
            modalContent: 'isSubscribeModal',
          },
        );
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        // store.dispatch({ type: GET_USER_TOKEN_ERROR });
      });
  }
  else {
    next(action);
  }
};

export default createUserMiddleware;
