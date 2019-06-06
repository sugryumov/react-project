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
      { pageId: 0, name: 'Главная' },
      { pageId: 1, name: 'Статьи' },
      { pageId: 2, name: 'Пользователи' },
      { pageId: 3, name: 'Контакты' }
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
