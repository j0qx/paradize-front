import axios from 'axios';
import {
  GET_USER_DATAS,
  UPDATE_USER_DATAS,
  MODIFY_USER_DATAS,
  TEST_USER_DATAS,
  TOGGLE_INPUT_ACCOUNT,
} from '../actions';

import url from '../graphql/endpoint';
import { getUserDatas, updateUserDatas } from '../graphql/queries';

const getUserMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_USER_DATAS) {
    const state = store.getState();
    console.log(state.user.mail);
    // on prépare la requete
    const config = {
      method: 'post',
      url,
      data: {
        query: getUserDatas(
          state.user.mail,
        ),
      },
    };
    // on joue la requête avec axios
    axios(config)
      // si réussite
      .then(({ data }) => {
        store.dispatch({
          type: UPDATE_USER_DATAS,
          payload: data.data.user,
        });
        console.log(data.data.user);
      })
      .catch((error) => {
        console.log(error);
        // store.dispatch({ type: GET_USER_TOKEN_ERROR });
      });
  }
  // TODO Need to be fix
  else if (action.type === MODIFY_USER_DATAS) {
    const state = store.getState();
    console.log(' id la personnne', state.user.id);
    // on prépare la requete
    const config = {
      method: 'post',
      url,
      data: {
        query: updateUserDatas(
          Number(state.user.id),
          state.account.inputValueNickName,
          state.account.inputValueFirstName,
          state.account.inputValueLastName,
          state.account.inputValueAddress,
          state.account.inputValueEmail,
          state.account.inputValuePhone,
          state.account.inputValuePostalCode,
          state.account.inputValueCity,
        ),
      },
    };
    // on joue la requête avec axios
    axios(config)
    // si réussite
      .then(({ data }) => {
        console.log('les datas', data);
        store.dispatch({
          type: TEST_USER_DATAS,
          // payload: data.updateUser,
          ...data.data.updateUser,
        });
        store.dispatch({ type: 'TOGGLE_INPUT_ACCOUNT' });
        console.log('la data du user', data.data);
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

export default getUserMiddleware;
