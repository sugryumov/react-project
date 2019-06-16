import React from 'react';

import Navigation from '../Navigation';
import Logotype from '../Logotype';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <Logotype />
          <Navigation />
        </div>
      </header>
    )
  }
};

export default Header;
