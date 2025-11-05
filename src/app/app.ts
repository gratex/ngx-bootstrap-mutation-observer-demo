import { Component, signal } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-root',
  imports: [BsDatepickerModule,],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('ngx-bootstrap-mutation-observer-demo');

  constructor() {
    // uncomment this code, to see the problem (browser will "freeze", check console for logs)

    // const observer = new MutationObserver(function (a) {
    //   console.log('Body mutated');
    // }
    // );
    // observer.observe(document.body, {
    //   childList: true,
    //   subtree: true,
    //   attributes: true,
    //   characterData: true
    // })
  }
}
