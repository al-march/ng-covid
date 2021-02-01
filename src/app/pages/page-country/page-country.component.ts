import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ICountry } from '@app/models/cases/country';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-page-country',
  templateUrl: './page-country.component.html',
  styleUrls: ['./page-country.component.scss']
})
export class PageCountryComponent implements OnInit {

  cases: ICountry;
  countryName: string;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(map(params => params.name))
      .subscribe(countryName => {
        this.countryName = countryName;
        this.getCountryCases(countryName);
      });
  }

  getCountryCases(country: string) {
    this.api.getCountryCases(country).subscribe(cases => {
      this.cases = cases;
      console.log(cases);
    });
  }
}
