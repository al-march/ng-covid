import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCountryComponent } from '@app/pages/page-country/page-country.component';

const routes: Routes = [
  {path: 'country', component: PageCountryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCountryRoutingModule {
}
