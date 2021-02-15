import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRegionsComponent } from '@app/pages/page-regions/page-regions.component';

const routes: Routes = [
  {path: 'regions', component: PageRegionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRegionsRoutingModule {
}
