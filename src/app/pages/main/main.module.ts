import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MatTableModule } from '@angular/material/table';

import { MainComponent } from './main.component';
import { StoreModule } from '@ngrx/store';
import { casesReducer } from '@app/store/cases/cases.reducer';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTableModule,

    StoreModule.forRoot({
      casesList: casesReducer
    })
  ]
})
export class MainModule {
}
