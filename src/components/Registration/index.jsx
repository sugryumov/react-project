import React from 'react';

import './Registration.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="registration">
        <div className="container registration__container">
          <div>
            <h1 className="registration__title">Регистрация</h1>

            <form className="form">
              <input
                type="text"
                className="form__input"
                placeholder="Логин"
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
              />
              <button
                className="form__button"
                type="button"
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Registration;
