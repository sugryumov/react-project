import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Router>
          <Header />
          <Content articles={ this.state.articles }/>
          <Footer />
      </ Router>
    )
  }
}

export default Main;
