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
    return (
      <div className="article-page">
        <div className="container">
          <h1 className="article-page__title">{this.props.selectedArticle.title}</h1>
          <p className="article-page__text">{ this.props.selectedArticle.body }</p>

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
              <div className="like__count">{ this.props.countLike }</div>
              {
                this.props.isLoggedIn
                ?
                <div
                  className={ (this.props.isLike ? 'like__icon--active' : 'like__icon') }
                  onClick={ () => this.props.actionGetArticle.isLike(this.props.countLike, this.props.isLike) }>
                </div>
                :
                <div className='like__icon'></div>
              }

            </div>
          </div>
          <Comment selectedArticle={this.props.selectedArticle}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article.article,
  isLoggedIn: state.login.isLoggedIn,
  comment: state.article.comment,
  isLike: state.article.isLike,
  countLike: state.article.countLike,
});

const mapDispatchToProps = dispatch => ({
  actionGetArticle: bindActionCreators(actionArticle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
