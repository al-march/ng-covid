import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { ICases, ICountryStateAll } from '@app/models/cases/country';
import { tap } from 'rxjs/operators';

interface Country {
  name: string;
  state: ICountryStateAll;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cases$ = this.store.pipe(select(selectCases)).pipe(
    tap(list => {
      this.casesCash = list;
      this.countriesList = Object.entries(list).map(([countryName, countryState]) => {
        return {
          name: countryName,
          state: countryState.All
        };
      });
    })
  );

  casesCash: ICases = null;
  countriesList: Country[] = [];

  constructor(
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    if (!this.casesCash) {
      this.api.getAllCases().subscribe();
    }
  }

  parseCases() {
  }
}
