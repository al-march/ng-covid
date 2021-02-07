import { Injectable } from '@angular/core';
import { Config } from '@app/core/config/config';
import { HttpClient } from '@angular/common/http';
import { ICases, ICountry, ICountryStateAll } from '@app/models/cases/country';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { retrievedCasesByContinents, retrievedCasesList } from '@app/store/cases/cases.actions';
import { IRegionsCases } from '@app/store/cases/cases.state';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private allCases: ICases;
  private countryCases: { [key: string]: ICountry } = {};

  constructor(
    private config: Config,
    private http: HttpClient,
    private store: Store
  ) {
  }

  public getAllCases(): Observable<ICases> {
    const getFromApi = () => this.http.get<ICases>(this.config.host + 'cases').pipe(
      tap(casesList => {
        this.store.dispatch(retrievedCasesList({casesList}));
        this.store.dispatch(retrievedCasesByContinents({countriesCases: this.parseCases(casesList)}));
        this.allCases = casesList;
      })
    );

    return this.allCases
      ? of(this.allCases)
      : getFromApi();
  }

  parseCases(cases: ICases): IRegionsCases {
    const continents: IRegionsCases = new Map<string, ICountryStateAll[]>();

    Object.values(cases)
      .filter(item => item.All.country)
      .map(state => state.All)
      .forEach(country => {
        const continent = country.continent || 'other';
        if (continents.get(continent)) {
          continents.get(continent).push(country);
        } else {
          continents.set(continent, [country]);
        }
      });

    return continents;
  }

  public getCountryCases(country: string): Observable<ICountry> {
    const getFromApi = () => this.http.get<ICountry>(`${this.config.host}cases?country=${country}`).pipe(
      tap(cases => {
        this.countryCases[country] = cases;
      })
    );

    return this.countryCases[country]
      ? of(this.countryCases[country])
      : getFromApi();
  }
}
