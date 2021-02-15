import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainModule } from '@app/pages/main/main.module';
import { PageCountryModule } from '@app/pages/page-country/page-country.module';
import { TemplateModule } from '@app/core/template/template.module';
import { ApiService } from '@app/services/api.service';
import { StoreModule } from '@ngrx/store';
import { progressReducer } from '@app/store/progress/progress.reducer';
import { casesReducer } from '@app/store/cases/cases.reducer';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { drawerReducer } from '@app/store/drawer/drawer.reducer';
import { SidebarModule } from '@app/core/template/sidebar/sidebar.module';
import { PageRegionsModule } from '@app/pages/page-regions/page-regions.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    MainModule,
    PageCountryModule,
    PageRegionsModule,
    StoreModule.forRoot({
      'cases': casesReducer,
      'drawer': drawerReducer,
      isLoading: progressReducer
    }),
    MatProgressBarModule,
    MatSidenavModule,
    SidebarModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (api: ApiService) => () => api.getAllCases().toPromise(),
      deps: [ApiService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
