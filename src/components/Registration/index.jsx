import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../../actions/registration'

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
                onChange={ (e) => this.props.actions.saveNameInputValueNewUser(e.target.value) }
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
                onChange={ (e) => this.props.actions.savePasswordInputValueNewUser(e.target.value) }
              />
              <button
                className="form__button"
                type="button"
                onClick={ () => this.props.actions.newUser(this.props.newUserLogin, this.props.newUserPassword) }
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

const mapStateToProps = state => ({
  newUserLogin: state.registration.newUserLogin,
  newUserPassword: state.registration.newUserPassword,
  isRegitration: state.registration.isRegitration
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default Wrapped;
