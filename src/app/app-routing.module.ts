import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { ShellComponent } from './shell/shell.component';
import { LogBookComponent } from './log-book/log-book.component';


const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LogBookComponent
      }
    ]

  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
