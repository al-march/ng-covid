import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { AllCountriesStatTableModule } from '@app/shared/components/all-countries-stat-table/all-countries-stat-table.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AllCountriesStatTableModule
  ]
})
export class MainModule {
}
