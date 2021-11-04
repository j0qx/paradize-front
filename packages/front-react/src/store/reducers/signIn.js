import { CHANGE_INPUT_VALUE_SIGNIN, GET_USER_TOKEN_ERROR } from '../actions';

const initialState = {
  mail: '',
  password: '',
  error: false,
};

const signInReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_SIGNIN:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case GET_USER_TOKEN_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default signInReducer;
