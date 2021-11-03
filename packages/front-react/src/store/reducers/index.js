import { combineReducers } from 'redux';
import userReducer from './user';
import searchReducer from './search';
import dataApiReducer from './dataApi';
import signUpReducer from './signUp';
import domSettingsReducer from './domSettings';
import signInReducer from './signIn';
import mapReducer from './map';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  dataApi: dataApiReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  domSettings: domSettingsReducer,
  map: mapReducer,

});

export default rootReducer;
