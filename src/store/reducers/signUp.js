import { CHANGE_INPUT_VALUE_SIGNUP, SET_ERROR_PASSWORD, SET_SUCCESS_PASSWORD } from '../actions';

const initialState = {
  lastName: '',
  firstName: '',
  username: '',
  mail: '',
  password: '',
  passwordError: false,
};

const signUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_SIGNUP:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case SET_ERROR_PASSWORD:
      return {
        ...state,
        passwordError: true,
      };
    case SET_SUCCESS_PASSWORD:
      return {
        ...state,
        passwordError: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
