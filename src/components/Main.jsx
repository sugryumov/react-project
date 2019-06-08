import React from 'react';

import Header from './Header/';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePageId: 0
    }

    this.pages = [
      { pageId: 0, name: 'Главная', path: '/' },
      { pageId: 1, name: 'Статьи', path: '/article' },
      { pageId: 2, name: 'Пользователи', path: '/users' },
      { pageId: 3, name: 'Контакты', path: '/contacts' }
    ]

    this.setPageId = this.setPageId.bind(this);
  }

  setPageId(pageId) {
    this.setState({
      activePageId: pageId
    })
  }

  render() {
    return (
      <div>
        <Header pages={ this.pages } setPageId={ this.setPageId }/>
        <Content pageId={ this.state.activePageId }/>
        <Footer />
      </div>
    )
  }
}

export default Main;
