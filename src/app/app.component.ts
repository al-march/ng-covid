import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectProgress } from '@app/store/progress/progress.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading$ = this.store.pipe(select(selectProgress))

  constructor(
    private store: Store
  ) {
  }
}
