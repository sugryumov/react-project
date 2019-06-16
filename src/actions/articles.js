import ARTICLE_LIST from '../constants';
import articles from '../fixtures';

const actionsArticles = () => {
    return {
      type: ARTICLE_LIST,
      payload: articles,
    }
}

export default actionsArticles;
