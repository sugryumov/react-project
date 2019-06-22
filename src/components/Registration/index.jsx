import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import login from '../../actions/login';
import getUsers from '../../actions/user';

import './Registration.css';

class Registration extends React.Component {
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
                onChange={ (e) => this.props.actionLogin.saveNewLoginInputValue(e.target.value) }
              />
              <input
                type="password"
                className="form__input"
                placeholder="Пароль"
                onChange={ (e) => this.props.actionLogin.saveNewPasswordInputValue(e.target.value) }
              />
              <button
                className="form__button"
                type="reset"
                onClick={ () => this.props.actionLogin.onRegistration(this.props.newUserLogin, this.props.newUserPassword, this.props.user) }
              >
                Зарегистрироваться
              </button>
              { this.props.errorEmptyField ? <p className="error">Заполните все поля</p> : null }
              { this.props.existsUser ? <p className="error">Пользователь с таким именем существует</p> : null }
            </form>
          </>
        }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  newUserLogin: state.login.newUserLogin,
  newUserPassword: state.login.newUserPassword,
  isRegistrataion: state.login.isRegistrataion,
  errorEmptyField: state.login.errorEmptyField,
  existsUser: state.login.existsUser,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  actionLogin: bindActionCreators(login, dispatch),
  actionGetUsers: bindActionCreators(getUsers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
