import { NgModule } from '@angular/core';
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
    PageCountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
