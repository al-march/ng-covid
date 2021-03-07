import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountriesStatTableComponent } from './all-countries-stat-table.component';
import { CountryFlagModule } from '@app/shared/components/country-flag/country-flag.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/shared/material/material/material.module';



@NgModule({
  declarations: [AllCountriesStatTableComponent],
  exports: [
    AllCountriesStatTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CountryFlagModule,
    RouterModule,
  ]
})
export class AllCountriesStatTableModule { }
