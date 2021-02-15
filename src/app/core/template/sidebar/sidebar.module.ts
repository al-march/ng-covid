import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SidebarModule { }
