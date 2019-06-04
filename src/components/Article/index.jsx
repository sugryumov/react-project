import React from 'react';
import axios from 'axios';

import './Article.css'
import '../../img/preview.jpeg'
import '../../img/preview-2.jpeg'
import '../../img/preview-3.jpeg'
import '../../img/preview-4.jpeg'
import '../../img/preview-5.jpeg'
import '../../img/preview-6.jpeg'
import '../../img/icon-like.svg'
import '../../img/icon-like-active.svg'

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLike: false,
      counter: 0,
    };

    this.like = this.like.bind(this);
  }

  render() {
    const { article } = this.props

    return (
      <div className="article">
        <img className="article__img" src={ article.img }/>

        <div className="article__data">
          <h3 className="article__title">{ article.title }</h3>
          <section className="article__excerpt">
            { article.excerpt }...
            <a href="#" className="article__link">Читать дальше</a>
          </section>

          <div className="article__info">
            <p className="article__meta">{ (new Date( article.date )).toDateString() }</p>
            <div className="article__like">
              <div className="like__count">{(this.state.isLike ? this.state.counter + 1 : this.state.counter)}</div>
              <div className={(this.state.isLike ? 'like__icon--active' : 'like__icon')} onClick = { this.like }>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  like() {
    this.setState({
      isLike: !this.state.isLike,
    });
  }
}

export default Article;
