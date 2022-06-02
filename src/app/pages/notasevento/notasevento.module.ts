import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotaseventoPageRoutingModule } from './notasevento-routing.module';

import { NotaseventoPage } from './notasevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotaseventoPageRoutingModule
  ],
  declarations: [NotaseventoPage]
})
export class NotaseventoPageModule {}
