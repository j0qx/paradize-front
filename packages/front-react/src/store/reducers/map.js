const initialState = {
  mapEvents: {
    currentPos: [48.75397405400506, 2.300341482002506],
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
