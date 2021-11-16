import axios from 'axios';
import {
  DELETE_USER,
  SET_MODAL_CONTENT,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from '../actions';

import url from '../graphql/endpoint';
import { deleteUser } from '../graphql/queries';

const deleteUserMiddleware = (store) => (next) => (action) => {
  if (action.type === DELETE_USER) {
    const state = store.getState();
    console.log(state.user);
    // on prépare la requete
    const config = {
      method: 'post',
      url,
      data: {
        query: deleteUser(
          state.user.mail,
        ),
      },
    };

    // on joue la requête avec axios
    axios(config)
      // si réussite
      .then((result) => {
        store.dispatch({
          type: DELETE_USER_SUCCESS,
        });
        console.log(result);
      })

      .catch((error) => {
        console.log(error);
        // store.dispatch({
        //   type: DELETE_USER_ERROR,
        // });
      });
  }
  else {
    next(action);
  }
};

export default deleteUserMiddleware;
