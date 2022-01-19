import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-show-add',
  templateUrl: './show-add.component.html',
  styleUrls: ['./show-add.component.css']
})
export class ShowAddComponent implements OnInit {

  form: FormGroup;
  movies: Movie[];
  auditoriums: Auditorium[];

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      date: [ '', [
        Validators.required
      ]],
      movie: [''],
      /*this.fb.group({
        title: [ '', [
          Validators.required,
          Validators.maxLength(200)
        ]],
        hours: [ '', [
          Validators.required,
          Validators.min(0),
          Validators.max(9)
        ]],
        minutes: [ '', [
          Validators.required,
          Validators.min(0),
          Validators.max(59)
        ]]
      }),*/
      auditorium: [''],
      /*this.fb.group({
        number: ['', [
          Validators.required,
        ]],
        rows: ['', [
          Validators.required,
        ]],
        seatsInRow: ['', [
          Validators.required,
        ]],
        capacity: ['', [
          Validators.required,
        ]],
        seats: ['', [
          Validators.required,
        ]]
      }),*/
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

  getMovies(){
    return [new Movie(), new Movie()];
  }

  getAuditorium(){
    return [new Auditorium(), new Auditorium()];
  }

  ngOnInit(): void {
  }

  submitForm() {
    
  }
}
