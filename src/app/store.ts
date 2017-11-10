import {HeaderState} from './components/header/header.reducer';
import {RouterState} from '@angular/router';
import {ArticleState} from './reducers/article.reducer';

export interface AppStore {
  header: HeaderState;
  router: RouterState;
  article: ArticleState;
}
