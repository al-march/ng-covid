import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountriesStatTableComponent } from './all-countries-stat-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CountryFlagModule } from '@app/shared/components/country-flag/country-flag.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [AllCountriesStatTableComponent],
  exports: [
    AllCountriesStatTableComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CountryFlagModule,
    MatPaginatorModule,
    RouterModule,
    MatButtonModule,
    MatSortModule
  ]
})
export class AllCountriesStatTableModule { }
