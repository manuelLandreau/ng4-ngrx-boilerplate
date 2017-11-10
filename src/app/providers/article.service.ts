import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Article from '../models/Article';
import {ArticleAction} from '../actions/article.action';
import {Store} from '@ngrx/store';
import {AppStore} from '../store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient, private store: Store<AppStore>) {}

  fetchArticles(): void {
    this.http
      .get<Article[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((articles: Article[]) => {
        this.store.dispatch(ArticleAction.fillArticles(articles));
      });
  }

  fetchArticle(id: number|string): Subscription {
    return this.http.get<Article>('https://jsonplaceholder.typicode.com/posts/' + id).subscribe(article => {
      this.store.dispatch(ArticleAction.fillArticle(article));
    });
  }
}
