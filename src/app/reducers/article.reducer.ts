import Article from '../models/Article';
import ActionWithPayload from '../models/ActionWithPayload';

export interface ArticleState {
  currentArticle: Article;
  articleList: Article[];
}

export function articleReducer(state: ArticleState = {currentArticle: null, articleList: null}, action: ActionWithPayload) {
  switch (action.type) {
    case 'FETCH_ARTICLE':
      return {...state, currentArticle: action.payload};
    case 'FETCH_ARTICLES':
      return {...state, articleList: action.payload};
  }
  return state;
}

