const initialState = {
  mapEvents: {
    currentPos: {
      lat: 48.855580520677606,
      lng: 2.345580144346338,
    },
  },
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'CHECKBOX_TOGGLE':
    //   return {
    //     ...state,
    //     apiSettings: {
    //       ...state.apiSettings,
    //       [action.checkBoxField]: !state.apiSettings[action.checkBoxField],
    //     },
    //   };
    case 'CHANGE_CURRENT_POS':
      return {
        mapEvents: {
          currentPos: { ...action.payload},
        },
      };
    default:
      return state;
  }
};

export default mapReducer;
