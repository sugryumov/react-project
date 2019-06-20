import { GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILED, IS_LIKE } from '../constants';
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
              dataComment: comment.data.slice(0, 3),
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
  }
}
export default actionArticle;