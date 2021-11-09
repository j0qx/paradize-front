import { GET_USER_TOKEN_SUCCESS } from '../actions';

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
    default:
      return state;
  }
};

export default userReducer;
