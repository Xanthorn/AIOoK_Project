import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateShowRequest } from 'src/contracts/requests/Shows/CreateShowRequest';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';
import { ShowsService } from 'src/services/shows.service';
import { Router } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-show-add',
  templateUrl: './show-add.component.html',
  styleUrls: ['./show-add.component.css']
})
export class ShowAddComponent implements OnInit {

  form: FormGroup;
  movies: Movie[] = [];
  auditoriums: Auditorium[];

  request?: CreateShowRequest;

  constructor(private fb: FormBuilder, private showsService: ShowsService, private moviesService: MoviesService, private router: Router) { 
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
    this.auditoriums = this.getAuditorium();
  }

  getAuditorium(){
    return [new Auditorium(), new Auditorium()];
  }

  async ngOnInit(): Promise<void> {
    this.movies = await this.moviesService.getMovies();
    console.log("Movies was fetched correctly");
  }

  async submitForm() {
    this.request = Object.assign({}, this.form.value);

    if (this.request == undefined) {
      return;
    }

    await this.showsService.createShow(this.request)

    this.router.navigateByUrl("/shows");
  }
}
