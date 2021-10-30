import { TOGGLE_PRINT_MODAL } from '../actions';

const initialState = {
  isModalHidden: true,
};

const domSettingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_PRINT_MODAL:
      return {
        ...state,
        isModalHidden: !state.isModalHidden,
      };
    default:
      return state;
  }
};

export default domSettingsReducer;
