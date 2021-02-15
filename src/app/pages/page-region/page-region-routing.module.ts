import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRegionComponent } from '@app/pages/page-region/page-region.component';

const routes: Routes = [
  {path: 'regions/:region', component: PageRegionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRegionRoutingModule {
}
