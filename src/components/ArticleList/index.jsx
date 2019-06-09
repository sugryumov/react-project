import React from 'react';
import { Link } from 'react-router-dom';

import './ArticleList.css'

import '../../img/preview.jpeg';
import '../../img/preview-2.jpeg';
import '../../img/preview-3.jpeg';
import '../../img/preview-4.jpeg';
import '../../img/preview-5.jpeg';
import '../../img/preview-6.jpeg';
import '../../img/icon-like.svg';
import '../../img/icon-like-active.svg';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articleElements = this.props.articleList.map(article => 
      <li className="articles__item" key = { article.id }>
        <div className="article">
          <img className="article__img" src={ article.img } alt=""/>

          <div className="article__data">
            <h3 className="article__title">{ article.title }</h3>
            <section className="article__excerpt">
              { article.excerpt }...
              <Link to={'/articles/' + article.id} className="article__link">Читать дальше</Link>
            </section>

            <div className="article__info">
              <p className="article__meta">{ (new Date( article.date )).toDateString() }</p>
              <p className="article__view">views {this.props.counterViews}</p>
            </div>
          </div>
        </div>
      </li>
    )

    return (
      <section className="articles">
        <div className="container">
          <ul className="articles__list">
             { articleElements }
          </ul>

          <div className="articles__pagination">
            <ul className="pagination__list">
              <li className="pagination__item pagination__item--active">
                <a className="pagination__link" href="#">1</a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#">2</a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#">3</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleList;
