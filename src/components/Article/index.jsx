import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Article.css';

import '../../img/preview.jpeg'

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
    const showComments = this.props.selectedArticle.comments.map(comment => {
      return (
        <div className="article-page__comment" key={ comment.id }>
          <p className="comments__user">{ comment.user }</p>
          <p className="comments__text">{ comment.text }</p>
        </div>
      )
    })

    return (
      <div className="article-page">
        <div className="container">
          <h1 className="article-page__title">{this.props.selectedArticle.title}</h1>
          <p className="article-page__text">{ this.props.selectedArticle.text }</p>

          <div className="article-page__controls">
            <Route 
              path={'/articles/:id'}
              exact
              render={ () => {
                return (
                  <div className="controls__link">
                    <Link className="link" to={'/articles'}>Назад</Link>
                  </div>
                )
              }}
            />

            <div className="controls__like">
              <div className="like__count">{ this.state.isLike ? this.state.countLike + 1 : this.state.countLike }</div>
              <div className={ (this.state.isLike ? 'like__icon--active' : 'like__icon') } onClick = { this.like }></div>
            </div>
          </div>

          <p className="article-page__comments">Комментарии</p>

          <>
            { showComments }
            <p className="article-page__comments">Написать комментарий</p>

            <form className="new-comment__form">
              <input type="text" className="new-comment__input new-comment__author" placeholder="Ваше имя"/>
              <textarea type="text" className="new-comment__input new-comment__textarea" rows="8" placeholder="Ваш комментарий"></textarea>
              <button className="new-comment__btn">Написать</button>
            </form>
          </>
        </div>
      </div>
    )
  }

  like() {
    this.setState({
      isLike: !this.state.isLike
    })
  }
}

export default Article;
