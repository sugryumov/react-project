import React from 'react';

import Navigation from '../Navigation';
import Logotype from '../Logotype';
import UserControl from '../UserControl';

import './Header.css';

function Header () {
  return (
    <header className="header">
      <div className="container header__container">
        <Logotype />
        <Navigation />
        <UserControl />
      </div>
    </header>
  )
}


export default Header;
