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
        <Route
          path='/articles'
          render={(props) => {
            return (
              <ArticleContainer
                isLoggedIn={ this.props.isLoggedIn }
              />
            )
          }}

        />
        <Route path='/users' component={ UsersContainer } />
        <Route path='/contacts' component={ NotFound } />
        <Route
          path='/login'
          render={ (props) => {
            return (
              <Login
                onInputChangeName={ this.props.onInputChangeName }
                onInputChangePass={ this.props.onInputChangePass }
                onLogin={ this.props.onLogin }
                isLoggedIn={ this.props.isLoggedIn }
                userLogin={ this.props.userLogin }
              />
            )
          }}
        />
        <Route
          path='/registration'
          render={ (props) => {
            return (
              <Registration
                newUser={ this.props.newUser } 
                onInputChangeNewName={ this.props.onInputChangeNewName }
                onInputChangeNewPass={ this.props.onInputChangeNewPass }
                isRegitration={ this.props.isRegitration }
              />
            )
          }}
        />
      </Switch>
    )
  }
}

export default Content;
