import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { pageReducer } from './page';
import { userReducer } from './user';
import { loginReducer } from './login';
import { articleReducer } from './article';
import { navigationReducer } from './navigation';

export default history => combineReducers({
  page: pageReducer,
  user: userReducer,
  login: loginReducer,
  article: articleReducer,
  navigation: navigationReducer,
  router: connectRouter(history)
});
