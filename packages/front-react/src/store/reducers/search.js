import {
  faCocktail, faClinicMedical, faShoppingCart, faTree, faHatCowboy, faSchool,
} from '@fortawesome/free-solid-svg-icons';
import {
  CHANGE_INPUT_MILES_VALUE,
  CHANGE_INPUT_TIME_VALUE,
  CHANGE_INPUT_TRANS_VALUE,
  CHANGE_INPUT_VALUE,
  CHANGE_RADIO_BUTTON,
} from '../actions';

export const initialState = {
  apiSettings:
   [
     {
       checkBoxeName: 'bars',
       checked: false,
       icon: faCocktail,
     },
     {
       checkBoxeName: 'hopital',
       checked: false,
       icon: faClinicMedical,
     },
     {
       checkBoxeName: 'shops',
       checked: false,
       icon: faShoppingCart,
     },
     {
       checkBoxeName: 'ecoles',
       checked: false,
       icon: faSchool,
     },
     {
       checkBoxeName: 'parcs',
       checked: false,
       icon: faTree,
     },
     {
       checkBoxeName: 'police',
       checked: false,
       icon: faHatCowboy,
     },
   ],
  inputValueAddress: '',
  inputValueTime: '',
  inputValueMiles: 1000,
  inputValueTrans: '',
  valueRadio: 1,
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHECKBOX_TOGGLE': {
      // Here we create a new array where we will push all the checkboxe
      // But with new value of property checked for the checbboxe concerned
      const newApiSettings = [];
      state.apiSettings.forEach((element) => {
        if (element.checkBoxeName === action.checkBoxField) {
          newApiSettings.push({ ...element, checked: !element.checked });
        }
        else {
          newApiSettings.push(element);
        }
      });
      return {
        ...state,
        apiSettings: newApiSettings,
      };
    }
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case CHANGE_INPUT_TIME_VALUE:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case CHANGE_INPUT_MILES_VALUE:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case CHANGE_INPUT_TRANS_VALUE:
      return {
        ...state,
        [action.inputField]: action.newValue,
      };
    case CHANGE_RADIO_BUTTON:
      return {
        ...state,
        [action.inputRadio]: action.newValue,
      };
    default:
      return state;
  }
};

export default searchReducer;
