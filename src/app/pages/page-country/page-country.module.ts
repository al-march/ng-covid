import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCountryRoutingModule } from './page-country-routing.module';
import { PageCountryComponent } from './page-country.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { PageCountryListComponent } from './page-country-list/page-country-list.component';


@NgModule({
  declarations: [PageCountryComponent, PageCountryListComponent],
  imports: [
    CommonModule,
    PageCountryRoutingModule,
    NgApexchartsModule,
    MatListModule,
    FormsModule
  ]
})
export class PageCountryModule {
}
