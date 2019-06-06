import React from 'react';

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
  }

  openNavigation() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getList() {
    return this.props.pages.map((item, index) => {
      return (
        <li className="nav__item" key={ index }>
          <span
            className="nav__link"
            onClick={ () => this.props.setPageId(item.pageId) }
          >{ item.name }</span>
        </li>
      )
    });
  }

  render() {
    const navigation = this.state.isOpen &&
      <nav className="nav">
        <ul className="nav__list">
          { this.getList() }
        </ul>
      </nav>

    return(
      <div>
        <div className={ "navigation " + (this.state.isOpen ? 'navigation__open' : 'navigation__hidden') }>
          { navigation }
        </div>

        <button
          className={ "nav__button " + (this.state.isOpen ? 'nav__show' : 'nav__hidden') }
          onClick = { this.openNavigation }>
          <span className="nav__line"></span>
        </button>
      </div>
    )
  }
}

export default Navigation;
