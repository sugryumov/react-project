import React from 'react';
import { Switch, Route } from "react-router-dom";

import Intro from '../Intro/';
import ArticleList from '../ArticleList/';
import UsersList from '../UsersList/';
import NotFound from '../NotFound/';


class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Route path='/' exact component={Intro} />
        <Route path='/articles' component={ArticleList} />
        <Route path='/users' component={UsersList} />
        <Route path='/contacts' component={NotFound} />
      </Switch>
    )
  }
}

export default Content;
