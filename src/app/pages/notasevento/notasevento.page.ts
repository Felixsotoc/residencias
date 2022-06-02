import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notasevento',
  templateUrl: './notasevento.page.html',
  styleUrls: ['./notasevento.page.scss'],
})
export class NotaseventoPage implements OnInit {

  description: string;

  constructor(public modalController: ModalController, public navParams: NavParams) {


    this.description = navParams.get('description');

  }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
