import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import registration from '../../actions/registration';
import getUsers from '../../actions/user';

import './Registration.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userListStorage = sessionStorage.getItem('userList');

    if (typeof userListStorage === 'undefined' || userListStorage === null) {
      this.props.actionGetUsers();
    }
  }

  render() {
    console.log(this.props)
    return (
      <section className="registration">
        <div className="container registration__container">
        {
          this.props.isRegistrataion
          ?
          <h1 className="registration__text">Вы успешно зарегистрировались!<br/>Зайдите на сайт используя свой логин и пароль</h1>
          :
          <>
            <h1 className="registration__title">Регистрация</h1>

            <form className="form">
              <input
                type="text"
                className="form__input"
                placeholder="Логин"
                onChange={ (e) => this.props.actionRegistration.saveNewLoginInputValue(e.target.value) }
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
                onChange={ (e) => this.props.actionRegistration.saveNewPasswordInputValue(e.target.value) }
              />
              <button
                className="form__button"
                type="button"
                onClick={ () => this.props.actionRegistration.onRegistration(this.props.newUserLogin, this.props.newUserPassword, this.props.user) }
              >
                Зарегистрироваться
              </button>

              { this.props.errorEmptyField ? <p className="error">Заполните все поля</p> : null }
            </form>
          </>
        }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  newUserLogin: state.registration.newUserLogin,
  newUserPassword: state.registration.newUserPassword,
  isRegistrataion: state.registration.isRegistrataion,
  errorEmptyField: state.registration.errorEmptyField,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  actionRegistration: bindActionCreators(registration, dispatch),
  actionGetUsers: bindActionCreators(getUsers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
