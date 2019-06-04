import React from 'react';

import './Navigation.css'

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

  render() {
    const navigation = this.state.isOpen &&
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">Главная</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Статьи</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Пользователи</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Коментарии</a>
          </li>
        </ul>
      </nav>

    return(
      <div>
        <div className={"navigation " + (this.state.isOpen ? 'navigation__open' : 'navigation__hidden')}>
          { navigation }
        </div>
        <button
          className={"nav__button " + (this.state.isOpen ? 'nav__show' : 'nav__hidden') }
          onClick = { this.openNavigation }>
            <span className="nav__line"></span>
        </button>
      </div>
    )
  }

  openNavigation() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default Navigation;
