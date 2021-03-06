import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import login from '../../actions/login';
import './UserControl.css'

class UserControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-control">
        {
          this.props.isLoggedIn
          ?
          <div className="user-control__logout-wrap">
            <p className='user-control__name'>{ this.props.userLogin }</p>
            <button
              className="user-control__button-logout"
              onClick={ () => this.props.actionLogin.logOut() }
            >выйти</button>
          </div>
          :
          <div className="user-control__link">
            <Link to={ '/login'} className="nav__link user-control__button user-control__button-login">Войти</Link>
            <Link to={ '/registration'} className="nav__link user-control__button-registration">Регистрация</Link>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userLogin: state.login.userLogin,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  actionLogin: bindActionCreators(login, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserControl);
