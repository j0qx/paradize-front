import { GET_DATAS_FROM_API_SUCCESS } from '../actions';

const initialState = {
  bars: [],
  hopital: [],
  shops: [],
  parcs: [],
  police: [],
  ecoles: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DATAS_FROM_API_SUCCESS:
      return {
        ...state,
        [action.keyword]: action.payload.data.data.tomtomSearch,
      };
    default:
      return state;
  }
};

export default searchReducer;
