import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { select, Store } from '@ngrx/store';
import { selectCases } from '@app/store/cases/cases.selectors';
import { ICountryStateAll } from '@app/models/cases/country';
import { map } from 'rxjs/operators';

interface ICountry {
  name: string;
  state: ICountryStateAll;
}

class Country implements ICountry {
  constructor(
    public name: string,
    public state: ICountryStateAll
  ) {
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'population', 'confirmed', 'deaths'];
  public dataSource: ICountry[];

  public cases$ = this.store.pipe(select(selectCases)).pipe(
    map(list => Object.entries(list)
      .map(([countryName, countryState]) => (
        new Country(countryName, countryState.All))
      )
    )
  );

  constructor(
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.cases$.subscribe(countries => {
      this.dataSource = countries
    })
  }

  parseCases() {
  }
}
