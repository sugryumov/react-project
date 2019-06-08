import React from 'react';

import Intro from '../Intro/';
import ArticleList from '../ArticleList/';
import UsersList from '../UsersList/index';
import NotFound from '../NotFound/index';


class Content extends React.Component {
  constructor(props) {
    super(props);

    this.getPageComponent = this.getPageComponent.bind(this);
  }

  getPageComponent() {
    switch (this.props.pageId) {
      case 0:
        return <Intro />
      
      case 1:
        return <ArticleList />

      case 2:
        return <UsersList />

      default:
        return <NotFound />
    }
  }

  render() {
    return(
      <div>
        { this.getPageComponent() }
      </div>
    )
  }
}

export default Content;
