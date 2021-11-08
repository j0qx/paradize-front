import {
  faCocktail, faClinicMedical, faShoppingCart, faTree, faHatCowboy, faSchool,
} from '@fortawesome/free-solid-svg-icons';
import {
  CHANGE_INPUT_MILES_VALUE,
  CHANGE_INPUT_TIME_VALUE,
  CHANGE_INPUT_TRANS_VALUE,
  CHANGE_INPUT_VALUE_SEARCH,
  CHANGE_RADIO_BUTTON,
  GET_DATAS_FROM_API_SUCCESS,
  GET_ISOCHRONE_SUCCESS,
  // GET_DATAS_FROM_API_ERROR,
} from '../actions';

export const initialState = {
  apiSettings:
   [
     {
       checkBoxeName: 'bars',
       checked: false,
       icon: faCocktail,
       result: [],
     },
     {
       checkBoxeName: 'hopital',
       checked: false,
       icon: faClinicMedical,
       result: [],
     },
     {
       checkBoxeName: 'supermarcket',
       checked: false,
       icon: faShoppingCart,
       result: [],
     },
     {
       checkBoxeName: 'ecoles',
       checked: false,
       icon: faSchool,
       result: [],
     },
     {
       checkBoxeName: 'parcs',
       checked: false,
       icon: faTree,
       result: [],
     },
     {
       checkBoxeName: 'police',
       checked: false,
       icon: faHatCowboy,
       result: [],
     },
   ],
  inputValueAddress: '',
  inputValueTime: '',
  inputValueMiles: 1000,
  inputValueTrans: '',
  valueRadio: 1,
  isochroneResults: null,
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
    case CHANGE_INPUT_VALUE_SEARCH:
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
    case GET_DATAS_FROM_API_SUCCESS: {
      const newApiSettings = [];
      state.apiSettings.forEach((element) => {
        if (element.checkBoxeName === action.keyword) {
          newApiSettings.push({ ...element, result: action.payload.data.data.tomtomSearch });
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
    case GET_ISOCHRONE_SUCCESS:
      return {
        ...state,
        isochroneResults: action.data,
      };
    case 'RESET_ISOCHRONE':
      return {
        ...state,
        isochroneResults: null,
      };
    default:
      return state;
  }
};

export default searchReducer;
