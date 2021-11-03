const initialState = {
  inputValueFirstName: '',
  inputValueLastName: '',
  inputValueNickName: '',
  inputValueEmail: '',
  inputValuePhone: '',
  inputValueAddress: '',
  inputValuePostalCode: '',
  inputValueCity: '',
};

const accountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE_ACCOUNT':
      return {
        ...state,
        [action.inputField]: action.newValue,
      };

    default:
      return state;
  }
};

export default accountReducer;
