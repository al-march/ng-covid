import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRegionRoutingModule } from './page-region-routing.module';
import { PageRegionComponent } from './page-region.component';


@NgModule({
  declarations: [PageRegionComponent],
  imports: [
    CommonModule,
    PageRegionRoutingModule
  ]
})
export class PageRegionModule { }
