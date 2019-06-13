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
        {
          this.props.isRegitration
          ?
          <>
            <h1 className="registration__text">Вы успешно зарегистрировались!<br />Зайдите на сайт используя свой логин и пароль</h1>
          </>
          :
          <div>
            <h1 className="registration__title">Регистрация</h1>

            <form className="form">
              <input
                type="text"
                className="form__input"
                placeholder="Логин"
                onChange={ (e) => this.props.onInputChangeNewName(e) }
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
                onChange={ (e) => this.props.onInputChangeNewPass(e) }
              />
              <button
                className="form__button"
                type="button"
                onClick={ () => this.props.newUser() }
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
        }
        </div>
      </section>
    )
  }
}

export default Registration;
