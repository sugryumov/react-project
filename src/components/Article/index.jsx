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
    const { selectedArticle } = this.props;

    return (
      <div className="article-page">
        <div className="container">
          <h1>{this.props.selectedArticle.title}</h1>
          <p className="article-page__text">{ this.props.selectedArticle.text }</p>

          <div className="article__like">
            <div className="like__count">{ this.state.isLike ? this.state.countLike + 1 : this.state.countLike }</div>
            <div className={ (this.state.isLike ? 'like__icon--active' : 'like__icon') } onClick = { this.like }></div>
          </div>
          <Route 
            path={'/articles/:id'}
            exact
            render={ () => <Link to={'/articles'}>Назад</Link> }
          />
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
