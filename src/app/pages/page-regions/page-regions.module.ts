import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRegionsRoutingModule } from './page-regions-routing.module';
import { PageRegionsComponent } from './page-regions.component';


@NgModule({
  declarations: [PageRegionsComponent],
  imports: [
    CommonModule,
    PageRegionsRoutingModule
  ]
})
export class PageRegionsModule { }
