import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ICountry } from '@app/models/cases/country';
import { ApiService } from '@app/services/api.service';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-country',
  templateUrl: './page-country.component.html',
  styleUrls: ['./page-country.component.scss']
})
export class PageCountryComponent implements OnInit {

  public countryName: string;
  public countryCases$: Observable<ICountry>;

  private cases$ = this.store.pipe(select(selectCases));

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.countryCases$ = this.route.queryParams.pipe(
      map(params => params.name),
      switchMap(country => {
        this.countryName = country;
        return this.cases$.pipe(
          map(cases => cases[country])
        );
      })
    );
  }
}
