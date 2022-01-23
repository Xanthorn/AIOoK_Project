import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: '[app-calendar-generator]',
  templateUrl: './calendar-generator.component.html',
  styleUrls: ['./calendar-generator.component.css']
})
export class CalendarGeneratorComponent implements OnInit {

  year: number = 2000;
  month: number = 1;
  daysInMonth: number = 0;
  numberOfWeeks: number = 0;
  firstDayOfMonth: number = 0;
  

  constructor() {
    const date = new Date();

    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    this.firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    this.numberOfWeeks = Math.ceil((this.daysInMonth + this.firstDayOfMonth - 1) / 7);
    
   }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }
}
