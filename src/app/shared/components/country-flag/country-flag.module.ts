import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFlagComponent } from './country-flag.component';



@NgModule({
  declarations: [CountryFlagComponent],
  exports: [
    CountryFlagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryFlagModule { }
