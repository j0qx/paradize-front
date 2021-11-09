import {
  TOGGLE_PRINT_MODAL,
  SET_MODAL_CONTENT,
  TOGGLE_OPEN_SLIDE,
  TOGGLE_OPEN_EXPLORE_SLIDE,
  TOGGLE_PRINT_EXPLORE_SEARCH,
  TOGGLE_OPEN_BURGER_ACCOUNT,
} from '../actions';

const initialState = {
  isModalHidden: true,
  isLoginModal: false,
  isSubscribeModal: false,
  isOffersModal: false,
  isLeftSlideOpen: true,
  isRightSlideOpen: true,
  isBottomSlideOpen: false,
  slide: {
    isMapSlideOpen: true,
    isSearchSlideOpen: false,
    isOffersSlideOpen: false,
    isStatisticsSlideOpen: false,
  },
  isSearchSettingsOpen: false,
  isAccountListOpen: false,
};

const domSettingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Action who will print the modal
    case TOGGLE_PRINT_MODAL:
      return {
        ...state,
        isModalHidden: !state.isModalHidden,
      };
      // Action who will set the content of the modal (login or subscribe offersmodal)
    case SET_MODAL_CONTENT:
      return {
        ...state,
        [action.modalContent]: !state[action.modalContent],
      };
      // Action who will toggle different Slides in explore
    case TOGGLE_OPEN_SLIDE:
      return {
        ...state,
        [action.slide]: !state[action.slide],
      };
      // Action who will toggle on multiples slide in explore Phone.
      // Allslide is catching the key of the object slide.
      // OtherSlide is filtering on all other slide not clicked.
    case TOGGLE_OPEN_EXPLORE_SLIDE: {
      const allSlide = Object.keys(state.slide);
      const otherSlide = allSlide.filter((slide) => action.openslide !== slide);
      return {
        ...state,
        slide: {
          [action.openslide]: true,
          [otherSlide[0]]: false,
          [otherSlide[1]]: false,
          [otherSlide[2]]: false,
        },

      }; }
    case TOGGLE_PRINT_EXPLORE_SEARCH:
      return {
        ...state,
        isSearchSettingsOpen: !state.isSearchSettingsOpen,

      };

    case TOGGLE_OPEN_BURGER_ACCOUNT: {
      return {
        ...state,
        isAccountListOpen: !state.isAccountListOpen,
      };
    }

    default:
      return state;
  }
};

export default domSettingsReducer;
