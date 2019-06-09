import React from 'react';
import { Link } from 'react-router-dom';

import './Article.css';
import '../../img/preview.jpeg';
import '../../img/preview-2.jpeg';
import '../../img/preview-3.jpeg';
import '../../img/preview-4.jpeg';
import '../../img/preview-5.jpeg';
import '../../img/preview-6.jpeg';
import '../../img/icon-like.svg';
import '../../img/icon-like-active.svg';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLike: false,
      countLike: 7
    };

    this.like = this.like.bind(this);
  }

  render() {
    const { article } = this.props;
   
    return (
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
            <div className="article__like">
              <div className="like__count">{ this.state.isLike ? this.state.countLike + 1 : this.state.countLike }</div>
              <div className={ (this.state.isLike ? 'like__icon--active' : 'like__icon') } onClick = { this.like }>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  like() {
    this.setState({
      isLike: !this.state.isLike
    });
  }
}

export default Article;
