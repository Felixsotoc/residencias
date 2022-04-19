import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PolizaPage } from './polizas';

const routes: Routes = [
  {
    path: '',
    component: PolizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizaPageRoutingModule { }
