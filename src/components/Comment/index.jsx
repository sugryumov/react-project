import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import actionArticle from '../../actions/article';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const getArticleComment = this.props.selectedArticle.id;

    const showComments = this.props.comment.map((comment) => {
      if (getArticleComment === comment.postId) {
        return (
          <div className="article-page__comment" key={ comment.id }>
            <p className="comments__user">{ comment.name }</p>
            <p className="comments__text">{ comment.body }</p>
          </div>
        )
      }
    })

    return (
      <>
        <p className="article-page__comments">Комментарии</p>
        <>
          { showComments }
          {
            this.props.isLoggedIn
            ?
            <>
              <p className="article-page__comments">Написать комментарий</p>

              <form className="new-comment__form">
                <textarea
                  type="text" 
                  className="new-comment__input new-comment__textarea" 
                  rows="8" 
                  placeholder="Ваш комментарий"
                  onChange={ (e) => this.props.actionGetArticle.saveUserChandeCommet(e.target.value)}
                  >
                </textarea>
                <button
                  className="new-comment__btn"
                  type="reset"
                  onClick={ () => this.props.actionGetArticle.submitComment(this.props.commentText, this.props.comment, this.props.userLogin, getArticleComment) }
                >Написать</button>
              </form>
            </>
            :
            <p className="article-page__comments--logout">Для обсуждения <Link to="/login" className="link comment__link">войдите</Link> на сайт</p>
          }
        </>
      </>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  comment: state.article.comment,
  commentText: state.article.commentText,
  userLogin: state.login.userLogin,
  article: state.article.article,
});

const mapDispatchToProps = dispatch => ({
  actionGetArticle: bindActionCreators(actionArticle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
