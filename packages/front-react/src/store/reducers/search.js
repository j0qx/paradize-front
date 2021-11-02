import { CHANGE_INPUT_VALUE } from '../actions';

const initialState = {
  bars: false,
  medic: false,
  shops: false,
  parcs: false,
  police: false,
  schools: false,
  inputValueAddress: '',
  inputValueTime: "",
  inputValueMiles: '',
  inputValueTrans: '',
  valueRadio: 1,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHECKBOX_TOGGLE':
      return {
        ...state,
        [action.checkBoxField]: !state[action.checkBoxField],
      };
    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
      case 'CHANGE_INPUT_TIME_VALUE':
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
      case 'CHANGE_INPUT_MILES_VALUE':
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
      case 'CHANGE_INPUT_TRANS_VALUE':
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
      case 'CHANGE_RADIO_BUTTON':
      return {
        ...state,
        [action.inputRadio]: action.newValue,
      };
    default:
      return state;
  }
};

export default searchReducer;
