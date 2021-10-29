import { combineReducers } from 'redux';
import userReducer from './user';
import searchReducer from './search';
import dataApiReducer from './dataApi';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  dataApi: dataApiReducer,
});

export default rootReducer;
