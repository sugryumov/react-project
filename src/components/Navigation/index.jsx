import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
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
          >
          { item.name }
          </NavLink>
        </li>
      )
    });
  }

  render() {
    return(
      <>
        <nav className="nav">
          <ul className="nav__list">
            { this.getList() }
          </ul>
        </nav>
      </>
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page.pages,
  }
}

export default connect(mapStateToProps)(Navigation);
