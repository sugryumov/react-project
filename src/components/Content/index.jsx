import React from 'react';
import { Switch, Route } from "react-router-dom";

import Intro from '../Intro/';
import ArticleContainer from '../ArticleContainer/';
import UsersList from '../UsersList/';
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
        <Route path='/' exact render={ () => <Intro /> } />
        <Route path='/articles' render={ () => <ArticleContainer/> } />
        <Route path='/users' render={ () => <UsersList/> } />
        <Route path='/contacts' render={ () => <NotFound /> } />
        <Route path='/login' render={ () => <Login /> } />
        <Route path='/registration' render={ () => <Registration /> } />
      </Switch>
    )
  }
}

export default Content;
