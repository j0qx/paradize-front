import axios from 'axios';
import {
  GET_USER_TOKEN,
  GET_USER_TOKEN_SUCCESS,
  GET_USER_TOKEN_ERROR,
} from '../actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_USER_TOKEN) {
    const state = store.getState();

    // on prépare la requete
    const config = {
      method: 'post',
      url: '',
      data: {
        mail: state.signIn.mail,
        password: state.signIn.password,
      },
    };

    // on joue la requête avec axios
    axios(config)
      // si réussite
      .then(() => {
        store.dispatch({ type: GET_USER_TOKEN_SUCCESS });
      })
      // si erreur
      .catch(() => {
        // oups une erreur... bon on va le dire qd meme au reducer
        // une autre action pour signaler l'echec
        store.dispatch({ GET_USER_TOKEN_ERROR });
      });
  }
  // si l'action n'est pas SUBMIT_LOGIN, je la nexte
  // elle ira ainsi jusqu'au reducer
  else {
    next(action);
  }
};

export default authMiddleware;
