import { CHANGE_INPUT_VALUE } from '../actions';

const initialState = {
  lastName: '',
  firstName: '',
  mail: '',
  password: '',
};

const signUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    default:
      return state;
  }
};

export default signUpReducer;
