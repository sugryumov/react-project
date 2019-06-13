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
          <h1 className="login__title">Вход</h1>

          <form className="form">
            <input type="text" className="form__input" placeholder="Логин" />
            <input type="password" className="form__input" placeholder="Пароль" />

            <button className="form__button">Войти</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login;
