import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  title: string;
  description: string;
  startTime: string;
  endTime: string;

  constructor(public modalController: ModalController, public navParams: NavParams) { 
    this.title= navParams.get('title');
    this.description= navParams.get('description');
    this.startTime= navParams.get('startTime');
    this.endTime= navParams.get('endTime');

    
  }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }
}
