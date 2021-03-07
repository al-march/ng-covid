import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCountryRoutingModule } from './page-country-routing.module';
import { PageCountryComponent } from './page-country.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PageCountryListComponent } from './page-country-list/page-country-list.component';
import { MaterialModule } from '@app/shared/material/material/material.module';


@NgModule({
  declarations: [PageCountryComponent, PageCountryListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PageCountryRoutingModule,
    NgApexchartsModule,
  ]
})
export class PageCountryModule {
}
