import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  title = 'app';
}
