import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';


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

  }
  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    img: '',
  }

  @ViewChild(CalendarComponent, null) myCal: CalendarComponent


  constructor() { }

  ngOnInit() {
  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;

  }
  onEventSelected(ev) {
    this.newEvent = ev;
  }
  back(){
    this.myCal.slidePrev();
  }
  next(){
    this.myCal.slideNext();
  }
}
