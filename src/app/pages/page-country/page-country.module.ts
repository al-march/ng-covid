import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCountryRoutingModule } from './page-country-routing.module';
import { PageCountryComponent } from './page-country.component';


@NgModule({
  declarations: [PageCountryComponent],
  imports: [
    CommonModule,
    PageCountryRoutingModule
  ]
})
export class PageCountryModule { }
