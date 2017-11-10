import {Component, OnInit} from '@angular/core';
import Article from '../../models/Article';
import {Store} from '@ngrx/store';
import {AppStore} from '../../store';
import {ArticleService} from '../../providers/article.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Home';
  articles: Store<Article[]>;

  constructor(private articleService: ArticleService, private store: Store<AppStore>) {}

  ngOnInit(): void {
    this.articleService.fetchArticles();
    this.articles = this.store.select('article', 'articleList');
  }
}
