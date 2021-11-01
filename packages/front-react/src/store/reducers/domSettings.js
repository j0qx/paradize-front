import { TOGGLE_PRINT_MODAL, SET_MODAL_CONTENT } from '../actions';

const initialState = {
  isModalHidden: true,
  isLoginModal: false,
  isSubscribeModal: false,
};

const domSettingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Action who will print the modal
    case TOGGLE_PRINT_MODAL:
      return {
        ...state,
        isModalHidden: !state.isModalHidden,
      };
      // Action who will set the content of the modal (login or subscribe)
    case SET_MODAL_CONTENT:
      return {
        ...state,
        [action.modalContent]: !state[action.modalContent],
      };

    default:
      return state;
  }
};

export default domSettingsReducer;
