import { combineReducers } from 'redux';
import userReducer from './user';
import searchReducer from './search';
import signUpReducer from './signUp';
import domSettingsReducer from './domSettings';
import signInReducer from './signIn';
import mapReducer from './map';
import accountReducer from './account';

const appReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  domSettings: domSettingsReducer,
  map: mapReducer,
  account: accountReducer,
});

// Reducer who will return initial state if the user logout
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
