const initialState = {
  mapEvents: {
    currentPos: [48.84878189511719, 2.3824814316304916],
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
        ...state,
        mapEvents: {
          ...state.mapEvents,
          [action.inputLatPos]: state.mapEvents.currentPos[0],
          [action.inputLngPos]: state.mapEvents.currentPos[1],
        },
      };
    default:
      return state;
  }
};

export default mapReducer;
