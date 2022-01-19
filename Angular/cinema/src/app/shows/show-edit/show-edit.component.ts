import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';
import { Show } from 'src/models/Show';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {
  form: FormGroup;

  movies: Movie[];
  auditoriums: Auditorium[];

  show: Show = {
    id: "1",
    date: new Date,
    movie: new Movie,
    auditorium: new Auditorium,
    soldTickets: 10,
    availableTickets: 2
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [ '', [
        Validators.required
      ]],
      movie: [''],
      auditorium: [''],
      sold: [ '', [
        Validators.required,
      ]],
      available: [ '', [
        Validators.required,
      ]]
    });
    this.movies = this.getMovies();
    this.auditoriums = this.getAuditorium();
   }

  ngOnInit(): void {
  }
  getMovies(){
    return [new Movie(), new Movie()];
  }

  getAuditorium(){
    return [new Auditorium(), new Auditorium()];
  }

  
  submitForm(){

  }
}
