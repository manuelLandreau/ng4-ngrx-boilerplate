import {headerReducer} from '../components/header/header.reducer';
import {routerReducer} from '@ngrx/router-store';
import {articleReducer} from './article.reducer';

const reducers = {
  header: headerReducer,
  router: routerReducer,
  article: articleReducer,
};

export default reducers;
