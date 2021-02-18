import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCountryRoutingModule } from './page-country-routing.module';
import { PageCountryComponent } from './page-country.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [PageCountryComponent],
  imports: [
    CommonModule,
    PageCountryRoutingModule,
    NgApexchartsModule,
    MatListModule,
  ]
})
export class PageCountryModule {
}
