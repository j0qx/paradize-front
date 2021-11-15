const initialState = {
  toUpdate: {
    inputValueFirstName: '',
    inputValueLastName: '',
    inputValueNickName: '',
    inputValueEmail: '',
    inputValuePhone: '',
    inputValueAddress: '',
    inputValuePostalCode: '',
    inputValueCity: '',
  },
  display: {
    isInputHidden: true,
  },
};

const accountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE_ACCOUNT':
      return {
        ...state,
        toUpdate: {
          ...state.toUpdate,
          [action.inputField]: action.newValue,
        },
      };
    case 'TOGGLE_INPUT_ACCOUNT':
      return {
        ...state,
        display: {
          ...state.display,
          isInputHidden: !state.display.isInputHidden,
        },
      };
    default:
      return state;
  }
};

export default accountReducer;
