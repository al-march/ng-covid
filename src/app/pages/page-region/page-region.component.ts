import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectRegionsCases } from '@app/store/cases/cases.selectors';
import { IRegionCase } from '@app/store/cases/cases.state';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-region',
  templateUrl: './page-region.component.html',
  styleUrls: ['./page-region.component.scss']
})
export class PageRegionComponent implements OnInit {

  public regionName: string;
  public region$: Observable<IRegionCase>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.region$ = this.route.paramMap.pipe(
      map(params => {
        const regionName = params.get('region');
        this.regionName = regionName;
        this.cdRef.detectChanges();
        return regionName;
      }),
      switchMap(regionName => this.store.pipe(
        select(selectRegionsCases), map(cases => cases.get(regionName))
        )
      )
    );
  }
}
