const initialState = {
  mapEvents: {
    currentPos: [0, 0],
  },
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
