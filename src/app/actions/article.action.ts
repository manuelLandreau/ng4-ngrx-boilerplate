import ActionWithPayload from '../models/ActionWithPayload';
import Article from '../models/Article';

export class ArticleAction {

  static FETCH_ARTICLE = 'FETCH_ARTICLE';
  static FETCH_ARTICLES = 'FETCH_ARTICLES';

  static fillArticle(article: Article): ActionWithPayload {
    return {
      type: ArticleAction.FETCH_ARTICLE,
      payload: article
    };
  }

  static fillArticles(articles: Article[]): ActionWithPayload {
    return {
      type: ArticleAction.FETCH_ARTICLES,
      payload: articles
    };
  }
}
