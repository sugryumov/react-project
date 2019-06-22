import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import login from '../../actions/login';
import getUsers from '../../actions/user';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   const userListStorage = sessionStorage.getItem('userList');

  //   if (typeof userListStorage === 'undefined' || userListStorage === null) {
  //     this.props.actionGetUsers();
  //   }
  // }

  render() {
    return (
      <section className="login">
        <div className="container login__container">
          {
            this.props.isLoggedIn
            ?
            <h1 className="login__welcome">Добро пожаловать на сайт { this.props.userLogin }</h1>
            :
            <>
              <h1 className="login__title">Вход</h1>
              <form className="form">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Логин"
                  onChange={ (e) => this.props.actionLogin.saveLoginInputValue(e.target.value) }
                />
                <input
                  type="password"
                  className="form__input"
                  placeholder="Пароль"
                  onChange={ (e) => this.props.actionLogin.savePasswordInputValue(e.target.value) }
                />
                <button
                  className="form__button"
                  type="button"
                  onClick={ () => this.props.actionLogin.onLogin(this.props.userLogin, this.props.userPassword, this.props.user) }
                >
                  Войти
                </button>

                { this.props.error ? <p className="error">Неверный логин или пароль</p> : null }
              </form>
            </>
          }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  userLogin: state.login.userLogin,
  userPassword: state.login.userPassword,
  isLoggedIn: state.login.isLoggedIn,
  error: state.login.error,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  actionLogin: bindActionCreators(login, dispatch),
  actionGetUsers: bindActionCreators(getUsers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
