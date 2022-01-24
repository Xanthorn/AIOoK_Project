import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/models/Show';

@Component({
  selector: '[app-show-details]',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input("shows") shows: Show[] = [];

  filtered: boolean = false;
  filteredString: string = '';

  
  constructor() { }

  ngOnInit(): void {
  }
  
  handleClickFilteredByTitle(filteredString: string){
    if(this.filtered == false){
      this.filtered = true;
      this.filteredString = filteredString;
    }
    else{
      this.filtered = false;
      this.filteredString = '';
    }
  }
}
