import React from 'react';
import { Switch, Route } from "react-router-dom";

import Intro from '../Intro/';
import ArticleContainer from '../ArticleContainer/';
import UsersContainer from '../UserContainer/';
import NotFound from '../NotFound/';


class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Route path='/' exact component={Intro} />
        <Route path='/articles' component={ArticleContainer} />
        <Route path='/users' component={UsersContainer} />
        <Route path='/contacts' component={NotFound} />
      </Switch>
    )
  }
}

export default Content;
