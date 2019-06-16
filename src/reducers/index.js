import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loginReducer from './login';
import registrationReducer from './registration';

export default history => combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  router: connectRouter(history)
});
