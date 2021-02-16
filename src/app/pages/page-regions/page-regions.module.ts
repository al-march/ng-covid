import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRegionsRoutingModule } from './page-regions-routing.module';
import { PageRegionsComponent } from './page-regions.component';
import { RegionsLinksGridComponent } from './regions-links-grid/regions-links-grid.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [PageRegionsComponent, RegionsLinksGridComponent],
  imports: [
    CommonModule,
    PageRegionsRoutingModule,
    NgApexchartsModule
  ]
})
export class PageRegionsModule { }
