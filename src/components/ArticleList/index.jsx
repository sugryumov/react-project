import React from 'react';

import Article from '../Article';

import './ArticleList.css'

import articles from '../../fixtures';

class ArticleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articles
    }
  }

  render() {
    const articleElements = this.state.articles.map(article => 
      <li className="articles__item" key = { article.id }>
        <Article article = { article }/>
      </li>
    )

    return (
      <section className="articles">
        <div className="container">
          <ul className="articles__list">
             { articleElements }
          </ul>

          <div className="articles__pagination">
            <ul class="pagination__list">
              <li class="pagination__item pagination__item--active">
                <a class="pagination__link" href="#">1</a>
              </li>
              <li class="pagination__item">
                <a class="pagination__link" href="#">2</a>
              </li>
              <li class="pagination__item">
                <a class="pagination__link" href="#">3</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleList;
