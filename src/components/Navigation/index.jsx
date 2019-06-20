import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import navgationAction from '../../actions/navigation'
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navAction.closeNavigationMobile()
  }

  getList() {
    return this.props.page.map((item, index) => {
      return (
        <li className="nav__item" key={ index }>
          <NavLink
            exact={ true }
            activeClassName="nav__link--active"
            to={ item.path }
            className="nav__link"
            onClick={ () =>  {
              this.props.navAction.closeNavigationMobile()
            }}
          >
          { item.name }
          </NavLink>
        </li>
      )
    });
  }

  render() {

    console.log('nav', this.props)
    const navigation = this.props.showMenu &&
      <nav className="nav">
        <ul className="nav__list">
          { this.getList() }
        </ul>
      </nav>

    return(
      <>
        <div className={ "navigation " + (this.props.showMenu ? 'navigation__open' : 'navigation__hidden') }>
          { navigation }
        </div>

        <button
          className={ "nav__button " + (this.props.showMenu ? 'nav__show' : 'nav__hidden') }
          onClick = { () => this.props.navAction.openNavigation() }>
          <span className="nav__line"></span>
        </button>
      </>
    )
  }
}

const mapStateToProps = state => ({
    page: state.page.pages,
    showMenu: state.navigation.showMenu,
    isOpen: state.navigation.isOpen
});

const mapDispatchToProps = dispatch => ({
  navAction: bindActionCreators(navgationAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
