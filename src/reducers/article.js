import { GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILED, IS_LIKE, USER_COMMENT_CHANGED, USER_COMMENT_SUBMIT } from '../constants';

const initialState = {
  article: [],
  image: [],
  comment: [],
  commentText: '',
  isLoadingArticle: false,
  articleLoadingError: '',
  isLike: false,
  countLike: 0
}

export function articleReducer(state = initialState, action) {

  switch(action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        isLoadingArticle: true,
      }

    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.dataArticle,
        image: action.dataImage,
        comment: action.dataComment,
        isLoadingArticle: false,
      }

    case GET_ARTICLE_FAILED:
      return {
        ...state,
        isLoadingArticle: false,
        articleLoadingError: action.payload
      }

    case IS_LIKE:
      return {
        ...state,
        isLike: !state.isLike,
        countLike: action.countLike
      }

    case USER_COMMENT_CHANGED:
        return {
          ...state,
          commentText: action.payload
        }
  
    case USER_COMMENT_SUBMIT:
      return {
        ...state,
        comment: action.payload,
        commentText: action.clearTextarea
      }
  }

  return state;
}