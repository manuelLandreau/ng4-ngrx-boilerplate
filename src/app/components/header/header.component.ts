import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '../../store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  toggled: Observable<boolean>;

  constructor(private store: Store<AppStore>) {
    this.toggled = store.select('header', 'toggled');
  }

  toggleDropdown(): void {
    this.store.dispatch({type: 'TOGGLE_DROPDOWN'});
  }
}
