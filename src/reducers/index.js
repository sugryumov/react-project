import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { pageReducer } from './page';
import { userReducer } from './user';
import { loginReducer } from './login';

export default history => combineReducers({
  page: pageReducer,
  user: userReducer,
  login: loginReducer,
  router: connectRouter(history)
});
