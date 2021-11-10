import { GET_USER_TOKEN_SUCCESS, UPDATE_USER_DATAS, MODIFY_USER_DATAS } from '../actions';

const initialState = {
  isLogged: false,
  accessToken: '',
  userName: '',
  mail: '',

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

    default:
      return state;
  }
};

export default userReducer;
