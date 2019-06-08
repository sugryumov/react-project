import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    const lWidth = window.screen.width;
    if (lWidth <= 600) {
      this.state = {
        isOpen: false
      }
    } else {
      this.state = {
        isOpen: true
      }
    }

    this.openNavigation = this.openNavigation.bind(this);
    this.closeNavigationMobile = this.closeNavigationMobile.bind(this);
  }

  getList() {
    return this.props.pages.map((item, index) => {
      return (
        <li className="nav__item" key={ index }>
          <NavLink exact={true} activeClassName="nav__link--active" to={ item.path }
            className="nav__link"
            onClick={ () =>  {
              this.props.setPageId(item.pageId)
              this.closeNavigationMobile()
            }}
          >{ item.name }</NavLink>
        </li>
      )
    });
  }

  closeNavigationMobile() {
    const lWidth = window.screen.width;

    if (lWidth <= 600) {
      this.setState ({
        isOpen: false
      })
    } else {
      this.setState ({
        isOpen: open
      })
    }
  }

  openNavigation() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const navigation = this.state.isOpen &&
      <nav className="nav">
        <ul className="nav__list">
          <Router>
            { this.getList() }
          </Router>
        </ul>
      </nav>

    return(
      <>
        <div className={ "navigation " + (this.state.isOpen ? 'navigation__open' : 'navigation__hidden') }>
          { navigation }
        </div>

        <button
          className={ "nav__button " + (this.state.isOpen ? 'nav__show' : 'nav__hidden') }
          onClick = { this.openNavigation }>
          <span className="nav__line"></span>
        </button>
      </>
    )
  }
}

export default Navigation;
