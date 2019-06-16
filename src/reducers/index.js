import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import pagesReducer from './pages';
import loginReducer from './login';
import registrationReducer from './registration';

export default history => combineReducers({
  pages: pagesReducer,
  login: loginReducer,
  registration: registrationReducer,
  router: connectRouter(history)
});
