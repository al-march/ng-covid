import { Injectable } from '@angular/core';
import { Config } from '@app/core/config/config';
import { HttpClient } from '@angular/common/http';
import { CasesResponse } from '@app/models/cases/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private config: Config,
    private http: HttpClient
  ) {
  }

  public getAllCases(): Observable<CasesResponse> {
    return this.http.get<CasesResponse>(this.config.host + 'cases');
  }
}
