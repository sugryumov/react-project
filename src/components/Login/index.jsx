import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/login';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="login">
        <div className="container login__container">
        {
          this.props.isLoggedIn
          ?
          <h1 className="login__welcome">Добро пожаловать на сайт { this.props.userLogin }</h1>
          :
          <div> 
            <h1 className="login__title">Вход</h1>

            <form className="form">
              <input
                type="text"
                className="form__input"
                placeholder="Логин"
                onChange={ (e) => {
                  this.props.actions.saveNameInputValue(e.target.value)
                }}
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
                onChange={ (e) => {
                  this.props.actions.savePasswordInputValue(e.target.value)
                }}
              />
              <button
                className="form__button"
                type="button"
                onClick={ () => this.props.actions.onLogin(this.props.userLogin, this.props.userPassword) }
              >
                Войти
              </button>
            </form>
          </div>
        }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  userLogin: state.login.userLogin,
  userPassword: state.login.userPassword,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Wrapped;
