import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagePath: '/'
    }

    this.pages = [
      { name: 'Главная', path: '/' },
      { name: 'Статьи', path: '/articles' },
      { name: 'Пользователи', path: '/users' },
      { name: 'Контакты', path: '/contacts' }
    ]

    this.setPagePath = this.setPagePath.bind(this);
  }

  setPagePath(path) {
    this.setState({
      pagePath: path
    })
  }

  render() {
    return (
      <Router>
          <Header pages={ this.pages } setPagePath={ this.setPagePath }/>
          <Content pagePath={ this.state.pagePath }/>
          <Footer />
      </ Router>
    )
  }
}

export default Main;
