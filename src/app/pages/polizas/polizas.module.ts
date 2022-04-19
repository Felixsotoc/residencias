import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PolizaPage } from './polizas';
import { PolizaPageRoutingModule } from './polizas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolizaPageRoutingModule
  ],
  declarations: [
    PolizaPage,
  ],
  entryComponents: [
  ]
})
export class PolizaModule { }
