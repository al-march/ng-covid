import { Injectable } from '@angular/core';
import { Config } from '@app/core/config/config';
import { HttpClient } from '@angular/common/http';
import { ICases, ICountry } from '@app/models/cases/country';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { retrievedCasesList } from '@app/store/cases/cases.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private allCases: ICases;

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
        this.allCases = casesList;
      })
    );

    return this.allCases
      ? of(this.allCases)
      : getFromApi();
  }

  public getCountryCases(country: string): Observable<ICountry> {
    return this.http.get<ICountry>(`${this.config.host}cases?country=${country}`);
  }
}
