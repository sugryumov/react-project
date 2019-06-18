import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (performance.navigation.type == 1) {
      sessionStorage.removeItem('userList');
    }

    return (
      <Router>
          <Header />
          <Content/>
          <Footer />
      </ Router>
    )
  }
}

export default Main;
