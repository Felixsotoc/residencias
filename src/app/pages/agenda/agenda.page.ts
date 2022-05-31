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
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(2022, 5, 30)
   // locale:'en-US'
  }
  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',

  }

  showAddEvent:boolean;

  @ViewChild(CalendarComponent)
  myCal: CalendarComponent;

  myData = [
    {
      title: "Mi cumple",
      description: "Cumple del desarrollador",
      startTime: new Date(2022, 4, 28, 12, 11, 11),
      endTime: new Date(2022, 4, 28, 1, 11, 11),

    }
  ];

  constructor(public modalController: ModalController) { }

  ngOnInit() {

    this.allEvents = this.myData;
  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;

  }

  async onEventSelected(ev) {
    this.newEvent = ev;
    const modal= await this.modalController.create({
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
  showHideForm(){
 this.showAddEvent= !this.showAddEvent;
 this.newEvent={
   title:'',
   description:'',
   startTime: new Date().toISOString(),
   endTime:new Date().toISOString(),
 }
  }
  today(){
    this.calendar.currentDate= new Date (2022,5,31);
  }
  changeMode(mode){
    this.calendar.mode=mode;
  }
  addEvent(){
    this.allEvents.push({
      title:this.newEvent.title,
      description:this.newEvent.description,
      startTime:this.newEvent.startTime,
      endTime:this.newEvent.endTime,

    })
  }

}
