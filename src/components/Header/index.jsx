import React from 'react';

import Navigation from '../Navigation';
import Logotype from '../Logotype';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {pages, setPagePath} = this.props

    return (
      <header className="header">
        <div className="container header__container">
          <Logotype />
          <Navigation
            pages={ pages }
            setPagePath={ setPagePath }
            isLoggedIn={ this.props.isLoggedIn }
            userLogin={ this.props.userLogin }
          />
        </div>
      </header>
    )
  }
};

export default Header;
