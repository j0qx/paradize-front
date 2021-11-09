import axios from 'axios';
import jwt from 'jwt-decode';
import {
  GET_USER_TOKEN,
  GET_USER_TOKEN_SUCCESS,
  GET_USER_TOKEN_ERROR,
  TOGGLE_PRINT_MODAL,
  SET_MODAL_CONTENT,
} from '../actions';

import url from '../graphql/endpoint';
import { loginUser } from '../graphql/queries';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_USER_TOKEN) {
    const state = store.getState();

    // on prépare la requete
    const config = {
      method: 'post',
      url,
      data: {
        query: loginUser(state.signIn.mail, state.signIn.password),
      },
    };

    // on joue la requête avec axios
    axios(config)
      // si réussite
      .then((result) => {
        if (result.data.data.login.message === 'authorized') {
          const { token } = result.data.data.login;
          const user = jwt(token);
          const { email, username } = user;
          localStorage.setItem('mail', email);
          localStorage.setItem('username', username);
          localStorage.setItem('token', token);
          store.dispatch({
            type: GET_USER_TOKEN_SUCCESS,
            accessToken: result.data.data.login.token,
            mail: email,
            username: username,
          });
          // If the current modal content was UserConnect, we set the state to false
          store.dispatch({ type: TOGGLE_PRINT_MODAL });
          if (state.domSettings.isLoginModal) {
            store.dispatch(
              {
                type: SET_MODAL_CONTENT,
                modalContent: 'isLoginModal',
              },
            );
          }
          // If the current modal content was UserSubscribe, we set this state to false
          else if (state.domSettings.isSubscribeModal) {
            store.dispatch(
              {
                type: SET_MODAL_CONTENT,
                modalContent: 'isSubscribeModal',
              },
            );
          }
        }
        else {
          store.dispatch({ type: GET_USER_TOKEN_ERROR });
        }
      })

      .catch((error) => {
        console.log(error);
        store.dispatch({ type: GET_USER_TOKEN_ERROR });
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
