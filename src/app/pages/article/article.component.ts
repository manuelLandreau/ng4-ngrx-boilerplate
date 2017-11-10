import {Component, OnDestroy, OnInit} from '@angular/core';
import Article from '../../models/Article';
import {Store} from '@ngrx/store';
import {AppStore} from '../../store';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ArticleService} from '../../providers/article.service';
import {Title} from '@angular/platform-browser';
import {ObservableInput} from 'rxjs/Observable';

@Component({
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit, OnDestroy {

  article: Store<Article>;
  id: number;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private store: Store<AppStore>, private title: Title) {
  }

  ngOnInit(): void {
    this.route.params.forEach(params => {
      this.id = +params['id'];
      this.articleService.fetchArticle(this.id);
    });
    this.article = this.store.select('article', 'currentArticle');
  }

  ngOnDestroy() {
    // this.article.unsubscribe();
  }
}
