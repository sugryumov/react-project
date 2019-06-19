import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { pageReducer } from './page';
import { userReducer } from './user';
import { loginReducer } from './login';
import { registrationReducer } from './registration';

export default history => combineReducers({
  page: pageReducer,
  user: userReducer,
  login: loginReducer,
  registration: registrationReducer,
  router: connectRouter(history)
});
