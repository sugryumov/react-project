import React from 'react';
import Article from '../Article';

function ArticleList({ articles }) {
  const articleElements = articles.map(article => 
    <li className="articles__item" key = { article.id }><Article article = { article }/></li>
  )

  return (
    <section className="articles">
      <div className="container">
        <ul className="articles__list">
          { articleElements }
        </ul>
      </div>
    </section>
  )
}

export default ArticleList;
