import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

/* import styles */
import './styles/fonts.css'
import './styles/variables.css'
import './styles/global.css'

/* import images */
import './img/favicon.ico'

import Main from './components/Main';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);