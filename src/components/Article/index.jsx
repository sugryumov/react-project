import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Article.css';

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
                    <Link className="controls__link--back" to={'/articles'}>Назад</Link>
                    {/* <Link to={'/'}>На главную</Link> */}
                  </div>
                )
              }}
            />

            <div className="controls__like">
              <div className="like__count">{ this.state.isLike ? this.state.countLike + 1 : this.state.countLike }</div>
              <div className={ (this.state.isLike ? 'like__icon--active' : 'like__icon') } onClick = { this.like }></div>
            </div>
          </div>
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
