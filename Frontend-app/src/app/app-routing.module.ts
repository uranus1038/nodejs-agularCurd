import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com1Component } from './com/com1/com1.component';

const routes: Routes = [
{ component:Com1Component,path:'com1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
