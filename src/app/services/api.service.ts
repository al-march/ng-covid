import { Injectable } from '@angular/core';
import { Config } from '@app/core/config/config';
import { HttpClient } from '@angular/common/http';
import { ICases } from '@app/models/cases/country';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { retrievedCasesList } from '@app/store/cases/cases.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private config: Config,
    private http: HttpClient,
    private store: Store
  ) {
  }

  public getAllCases(): Observable<ICases> {
    return this.http.get<ICases>(this.config.host + 'cases').pipe(
      tap(casesList => this.store.dispatch(retrievedCasesList({casesList})))
    );
  }
}
