import React from 'react';
import ReactDOM from 'react-dom';

/* import styles */
import './styles/fonts.css'
import './styles/variables.css'
import './styles/global.css'

/* import images */
import './img/favicon.ico'

/* import components */
import Main from './components/Main';

ReactDOM.render(
    <Main />,
  document.getElementById('app')
);
