import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { EventosPage } from '../eventos/eventos.page';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  allEvents = [];
  currentMonth: string;
  //fecha actual
  myDate: String = new Date().toISOString();

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
    // locale:'en-US'
  }
  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',



  }

  showAddEvent: boolean;

  @ViewChild(CalendarComponent)
  myCal: CalendarComponent;
/*
  myData = [
    {
      title: "Mi cumple",
      description: "Cumple del desarrollador",
      startTime: new Date(2022, 4, 28, 12, 11, 11),
      endTime: new Date(2022, 4, 28, 1, 11, 11),

    }
  ];*/

  constructor(public modalController: ModalController) {


    this.allEvents = JSON.parse(localStorage.getItem("eventos"));
    const localEventos = JSON.parse(localStorage.getItem("eventos"));
    if (localEventos == undefined || localEventos == null) {
      this.allEvents = [];

    }
    else {
      this.allEvents=[]
      localEventos.forEach(evento => {

        this.allEvents.push({

          title: evento.title,
          description: evento.description,
          startTime: new Date(evento.startTime),
          endTime: new Date(evento.endTime)
        })
      })
      console.log(this.allEvents);
    }


  }

  ngOnInit() {






  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;

  }

  async onEventSelected(ev) {
    this.newEvent = ev;
    const modal = await this.modalController.create({
      component: EventosPage,
      componentProps: ev
    });
    return await modal.present();
  }



  back() {
    this.myCal.slidePrev();
  }
  next() {
    this.myCal.slideNext();
  }
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    }
  }
  today() {
    this.calendar.currentDate = new Date();
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  close() {
    this.modalController.dismiss();
  }
  //prueba
  eventStartTime() {

  }

  addEvent() {
    this.allEvents.push({
      title: this.newEvent.title,
      description: this.newEvent.description,
      startTime: new Date(this.newEvent.startTime),
      endTime: new Date(this.newEvent.endTime),
    })
    this.showAddEvent = !this.showAddEvent
    localStorage.setItem("eventos", JSON.stringify(this.allEvents))
  //  this.myData = JSON.parse(localStorage.getItem("eventos"))


  }

}
