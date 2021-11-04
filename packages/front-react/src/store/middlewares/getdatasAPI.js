import axios from 'axios';
import { tomtomSearch } from '../graphql/queries';
import url from '../graphql/endpoint';

import {
  GET_DATAS_FROM_API,
  GET_DATAS_FROM_API_SUCCESS,
  GET_DATAS_FROM_API_ERROR,
} from '../actions';

const getDateApi = (store) => (next) => (action) => {
  if (action.type === GET_DATAS_FROM_API) {
    const state = store.getState();
    console.log(  action.keyword,
      state.map.mapEvents.currentPos.lat,
      state.map.mapEvents.currentPos.lng,
      state.search.inputValueMiles,
      1000)
    axios({
      url,
      method: 'post',
      data: {
        query: tomtomSearch(
          action.keyword,
          state.map.mapEvents.currentPos.lat,
          state.map.mapEvents.currentPos.lng,
          state.search.inputValueMiles,
          1000,
        ),
      },
    }).then((result) => {
      store.dispatch({
        type: GET_DATAS_FROM_API_SUCCESS,
        payload: result,
        keyword: action.keyword,
      });
    }).catch((error) => {
      console.log(error);
      store.dispatch({ type: GET_DATAS_FROM_API_ERROR, payload: error });
    });
  }
  // si l'action n'est pas SUBMIT_LOGIN, je la nexte
  // elle ira ainsi jusqu'au reducer
  else {
    next(action);
  }
};

export default getDateApi;
