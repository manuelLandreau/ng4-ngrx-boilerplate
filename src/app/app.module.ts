import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ArticleComponent} from './pages/article/article.component';
import {HttpClientModule} from '@angular/common/http';
import reducers from './reducers';
import {ArticleListItemComponent} from './components/article-list-item/article-list-item.component';
import {ArticleService} from './providers/article.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'articles/:id', component: ArticleComponent }
    ]),
    StoreRouterConnectingModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
