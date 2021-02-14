import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SidebarModule { }
