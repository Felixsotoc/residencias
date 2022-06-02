import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';
import { NotaseventoPage } from '../notasevento/notasevento.page';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
  showAddEvent: boolean;


  public inputnota: string = "";
  allEvents = [];



  newEvent = {
    description: '',
  }
  constructor(
    private alert: AlertController,
    public modalController: ModalController) {

    this.allEvents = JSON.parse(localStorage.getItem("notaslocal"));
    const localNotas = JSON.parse(localStorage.getItem("notaslocal"));
    if (localNotas == undefined || localNotas == null) {
      this.allEvents = [];

    }
    else {
      this.allEvents = []
      localNotas.forEach(evento => {

        this.allEvents.push({
          description: evento.description,
        })
      })
      console.log(this.allEvents);
    }


  }

  ngOnInit() {
  }
  async onEventSelected(ev) {
    this.newEvent = ev;
    const modal = await this.modalController.create({
      component: NotaseventoPage,
      componentProps: ev
    });
    return await modal.present();
  }
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      description: '',
    }
  }

  close() {
    this.modalController.dismiss();
  }

  addNota() {
    this.allEvents.push({
      description: this.inputnota

    })
    this.inputnota = ""

    this.showAddEvent = !this.showAddEvent
    localStorage.setItem("notaslocal", JSON.stringify(this.allEvents))



  }
  public async eliminarnota(index: number) {
    const alerter = await this.alert.create({
      header: "Eliminar nota",
      message: "Seguro que quieres eliminar esta nota?",
      buttons: [
        {
          text: "cancelar",
          role: "cancel",
        },
        {
          text: "eliminar",
          handler: () => {
            this.allEvents.splice (index,1)
            localStorage.setItem("notaslocal", JSON.stringify(this.allEvents))
          }
        }
      ]



    })
    alerter.present()

  }

}
