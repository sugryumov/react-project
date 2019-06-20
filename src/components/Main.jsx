import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getUsers from '../actions/user';

import Header from './Header/';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actionGetUsers();
  }

  render() {
    return (
      <Router>
          <Header />
          <Content/>
          <Footer />
      </ Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isLoading: state.user.isLoading
});

const mapDespatchToProps = dispatch => ({
  actionGetUsers: bindActionCreators(getUsers, dispatch)
})

export default connect(mapStateToProps, mapDespatchToProps)(Main);
