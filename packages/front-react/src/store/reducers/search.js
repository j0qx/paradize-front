const initialState = {
  bars: false,
  medic: false,
  shops: false,
  parcs: false,
  police: false,
  schools: false,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHECKBOX_TOGGLE':
      return {
        ...state,
        [action.checkBoxField]: !state[action.checkBoxField],
      };
    default:
      return state;
  }
};

export default searchReducer;
