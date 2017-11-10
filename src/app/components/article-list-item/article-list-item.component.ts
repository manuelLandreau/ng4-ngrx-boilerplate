import { Component, Input } from '@angular/core';
import Article from '../../models/Article';

@Component({
    selector: 'app-article-item',
    template: `
        <div class="card">
            <div class="card-body">
            <h4 class="card-title">{{article.title}}</h4>
            <p class="card-text">{{article.body}}</p>
            <a routerLink="/articles/{{article.id}}" class="card-link">Go to the article</a>
            </div>
        </div>`
})
export class ArticleListItemComponent {

    @Input() article: Article;

}
