import React from 'react';

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
                onChange={ (e) => this.props.onInputChangeName(e) }
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
                onChange={ (e) => this.props.onInputChangePass(e) }
              />
              <button
                className="form__button"
                type="button"
                onClick={ () => this.props.onLogin() }
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

export default Login;
