import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/';
import Content from './Content';
import Footer from './Footer';

import registeredUsers from '../registeredUsers';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagePath: '/',
      registeredUsers: registeredUsers,
      userLogin: '',
      userPassword: '',
      isLoggedIn: false,
      newUserLogin: '',
      newUserPaassword: '',
      isRegitration: false
    }

    this.pages = [
      { name: 'Главная', path: '/' },
      { name: 'Статьи', path: '/articles' },
      { name: 'Пользователи', path: '/users' },
      { name: 'Контакты', path: '/contacts' },
      { name: 'Войти', path: '/login' },
      { name: 'Регистрация', path: '/registration' }
    ]

    this.setPagePath = this.setPagePath.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onInputChangeName = this.onInputChangeName.bind(this);
    this.onInputChangePass = this.onInputChangePass.bind(this);

    this.newUser = this.newUser.bind(this);
    this.onInputChangeNewName = this.onInputChangeNewName.bind(this);
    this.onInputChangeNewPass = this.onInputChangeNewPass.bind(this);

  }

  setPagePath(path) {
    this.setState({
      pagePath: path
    })
  }

  onInputChangeName(e) {
    this.setState({
      userLogin: e.target.value,
    });
  }

  onInputChangePass(e) {
    this.setState({
      userPassword: e.target.value,
    });
  }

  onLogin() {
    this.state.registeredUsers.map(userData => {
      if (this.state.userLogin === userData.login && this.state.userPassword === userData.password) {
        this.setState({
          isLoggedIn: true,
        })
      }
    })
  }

  onInputChangeNewName(e) {
    this.setState({
      newUserLogin: e.target.value,
    });
  }

  onInputChangeNewPass(e) {
    this.setState({
      newUserPaassword: e.target.value,
    });
  }

  newUser() {
    registeredUsers.push({
      login: this.state.newUserLogin,
      password: this.state.newUserPaassword
    })

    if (this.state.newUserLogin !== '' && this.state.newUserPaassword !== '') {
      this.setState({
        isRegitration: true,
      })
    }
  }

  render() {
    return (
      <Router>
          <Header
            pages={ this.pages }
            setPagePath={ this.setPagePath }
            isLoggedIn={ this.state.isLoggedIn }
            userLogin={ this.state.userLogin }
          />
          <Content
            articles={ this.state.articles }
            pagePath={ this.state.pagePath }
            onInputChangeName={ this.onInputChangeName }
            onInputChangePass={ this.onInputChangePass }
            onLogin={ this.onLogin }
            isLoggedIn={ this.state.isLoggedIn }
            userLogin={ this.state.userLogin }
            onInputChangeNewName={ this.onInputChangeNewName }
            onInputChangeNewPass={ this.onInputChangeNewPass }
            newUser={ this.newUser }
            isRegitration={ this.state.isRegitration }
          />
          <Footer />
      </ Router>
    )
  }
}

export default Main;
