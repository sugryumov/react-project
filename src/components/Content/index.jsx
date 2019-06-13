import React from 'react';
import { Switch, Route } from "react-router-dom";

import Intro from '../Intro/';
import ArticleContainer from '../ArticleContainer/';
import UsersContainer from '../UserContainer/';
import NotFound from '../NotFound/';
import Login from '../Login/';
import Registration from '../Registration/';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Route path='/' exact component={ Intro } />
        <Route path='/articles' component={ ArticleContainer } />
        <Route path='/users' component={ UsersContainer } />
        <Route path='/contacts' component={ NotFound } />
        <Route path='/login' component={ Login } />
        <Route path='/registration' component={ Registration } />
      </Switch>
    )
  }
}

export default Content;
