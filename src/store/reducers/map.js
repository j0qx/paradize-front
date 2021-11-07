import { CHANGE_CURRENT_POS } from '../actions';

const initialState = {
  currentPos: [48.76353192218749, 2.2984092239079352],
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_POS:
      return {
        ...state,
        currentPos: [action.inputLatPos, action.inputLngPos],
      };
    default:
      return state;
  }
};

export default mapReducer;
