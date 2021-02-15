import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectRegionsCases } from '@app/store/cases/cases.selectors';

@Component({
  selector: 'app-page-regions',
  templateUrl: './page-regions.component.html',
  styleUrls: ['./page-regions.component.scss']
})
export class PageRegionsComponent implements OnInit {

  public regions$ = this.store.pipe(select(selectRegionsCases))

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}
