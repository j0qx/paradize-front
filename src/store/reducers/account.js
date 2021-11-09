const initialState = {
  inputValueFirstName: '',
  inputValueLastName: '',
  inputValueNickName: '',
  inputValueEmail: '',
  inputValuePhone: '',
  inputValueAddress: '',
  inputValuePostalCode: '',
  inputValueCity: '',
  isInputHidden: true,
};

const accountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE_ACCOUNT':
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case 'TOGGLE_INPUT_ACCOUNT':
      return {
        ...state,
        isInputHidden: !state.isInputHidden,
      };
    default:
      return state;
  }
};

export default accountReducer;
