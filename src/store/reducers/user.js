import {
  GET_USER_TOKEN_SUCCESS, UPDATE_USER_DATAS, MODIFY_USER_DATAS, TEST_USER_DATAS,
} from '../actions';

const initialState = {
  isLogged: false,
  accessToken: '',
  username: '',
  mail: '',
  first_name: '',
  last_name: '',
  civility: '',
  address: '',
  city_code: null,
  city: '',
  phone: '',
  avatar: '',

};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_TOKEN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        username: action.username,
        mail: action.mail,
        accessToken: action.accessToken,

      };
    case UPDATE_USER_DATAS:
      return {
        ...state,
        ...action.payload,

      };
    case TEST_USER_DATAS:
      return {
        ...state,
        username: action.username,
        mail: action.mail,
        first_name: action.first_name,
        last_name: action.last_name,
        civility: action.civility,
        address: action.address,
        city_code: action.city_code,
        city: action.city,
        phone: action.phone,
        avatar: action.avatar,
      };

    default:
      return state;
  }
};

export default userReducer;
