const initialState = {

  inputValueTitle: '',
  inputValuePicture: '',
  inputValueDescription: '',
  isOfferOnline: false,
  inputValueLatCoordinate: '',
  inputValueLongCoordinate: '',
};

const offersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE_OFFERS':
      return {
        ...state,
        [action.inputFieldOffers]: action.newValue,
      };

      // here , we are creating a toggle on the online/offline position of the Offer Created.
    case 'TOGGLE_ONLINE_OFFER':
      return {
        ...state,
        isOfferOnline: !state.isOfferOnline,
      };
    default:
      return state;
  }
};
export default offersReducer;
