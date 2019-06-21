import { GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILED, IS_LIKE, USER_COMMENT_CHANGED, USER_COMMENT_SUBMIT } from '../constants';
import axios from 'axios';

const actionArticle = {
  getArticles() {
    return (dispatch, getStore) => {
      dispatch({
        type: GET_ARTICLE_REQUEST
      });

      (async () => {
        await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts/'),
          axios.get('https://picsum.photos/v2/list'),
          axios.get('https://jsonplaceholder.typicode.com/comments')
          ])
          .then(axios.spread( (article, image, comment) => {
            dispatch({
              type: GET_ARTICLE_SUCCESS,
              dataArticle: article.data.slice(0, 6),
              dataImage: image.data.slice(5, 11),
              dataComment: comment.data.slice(0, 50),
            })
          }))
          .catch(err => {
            dispatch({
              type: GET_ARTICLE_FAILED,
              payload: err.message,
            });
          });
      })();
    }
  },

  isLike(counLike, isLike) {
    const incrementLike = isLike ? counLike - 1 : counLike + 1;

    return {
      type: IS_LIKE,
      payload: true,
      countLike: incrementLike
    }
  },

  saveUserChandeCommet(value) {
    return {
      type: USER_COMMENT_CHANGED,
      payload: value
    }
  },

  submitComment(e, commentText, commentArray, userLogin, selectedPost) {
    console.log(commentArray)
    // e.preventDefault();
    if (!commentText.length) {
      return console.log('Введите комментарии');
    }
 
    const newItem = {
      body: commentText,
      name: userLogin,
      postId: selectedPost
    };

    const addNewComment = commentArray.concat(newItem);

    return {
      type: USER_COMMENT_SUBMIT,
      payload: addNewComment,
      clearTextarea: ''
    }
  }
}
export default actionArticle;
