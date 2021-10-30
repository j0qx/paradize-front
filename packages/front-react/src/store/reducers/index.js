import { combineReducers } from 'redux';
import userReducer from './user';
import searchReducer from './search';
import dataApiReducer from './dataApi';
import signUpReducer from './signUp';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  dataApi: dataApiReducer,
  signUp: signUpReducer,
});

export default rootReducer;
