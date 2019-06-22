import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link, Route } from 'react-router-dom';

import actionArticle from '../../actions/article';
import Comment from '../Comment';
import './Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articleId = +this.props.match.params.id;
    const selectedArticle = this.props.article.article.find(article => article.id === articleId);

    return (
      <div className="article-page">
        <div className="container">
          <h1 className="article-page__title">{ selectedArticle.title}</h1>
          <p className="article-page__text">{ selectedArticle.body }</p>

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
              <div className="like__count">{ this.props.article.likeData[articleId].value }</div>
              {
                this.props.login.isLoggedIn
                ?
                <div
                  className={ this.props.article.likeData[articleId].status ? 'like__icon--active' : 'like__icon' }
                  onClick={ () => this.props.actionGetArticle.handleLike(articleId, this.props.article.likeData) }>
                </div>
                :
                <div className='like__icon'></div>
              }
            </div>
          </div>
          <Comment selectedArticle={ selectedArticle }/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  actionGetArticle: bindActionCreators(actionArticle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
