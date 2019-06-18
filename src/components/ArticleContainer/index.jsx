import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from '../ArticleList';
import Article from '../Article';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Route path={ '/articles' } exact render={ () => <ArticleList /> } />
        <Route
          path={'/articles/:id'}
          exact
          render={(props) => {
            const articleId = props.match.params.id;
            const selectedArticle = this.state.articles.find(article => article.id === articleId);
            return (
              <Article selectedArticle={ selectedArticle } />
            )
          }}
        />
      </>
    )
  }
}

export default ArticleContainer;
