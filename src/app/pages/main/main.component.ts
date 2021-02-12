import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public cases$ = this.store.pipe(select(selectCases)).pipe(
    map(list => Object.values(list)
      .filter(item => item.All.country)
      .map(state => state.All)
    )
  );

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
  }
}
