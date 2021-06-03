import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { ShellComponent } from './shell/shell.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: ShellComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
