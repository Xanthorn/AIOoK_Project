import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateShowRequest } from 'src/contracts/requests/Shows/CreateShowRequest';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';
import { ShowsService } from 'src/services/shows.service';
import { Router } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';
import { AuditoriumsService } from 'src/services/auditoriums.service';

@Component({
  selector: 'app-show-add',
  templateUrl: './show-add.component.html',
  styleUrls: ['./show-add.component.css']
})
export class ShowAddComponent implements OnInit {

  form: FormGroup;
  movies: Movie[] = [];
  auditoriums: Auditorium[] = [];

  request?: CreateShowRequest;

  constructor(private fb: FormBuilder, private showsService: ShowsService, private moviesService: MoviesService, 
    private auditoriumsService: AuditoriumsService, private router: Router) { 
    this.form = this.fb.group({
      date: [ '', [
        Validators.required
      ]],
      movieId: ['', [
        Validators.required,
      ]],
      auditoriumId: ['', [
        Validators.required,
      ]]
    });
  }

  async ngOnInit(): Promise<void> {
    this.movies = await this.moviesService.getMovies();
    console.log("Movies was fetched correctly");

    this.auditoriums = await this.auditoriumsService.getAuditoriums();
    console.log("Auditoriums was fetched correctly");
  }

  async submitForm() {
    this.request = Object.assign({}, this.form.value);
    console.log(this.request);

    if (this.request == undefined) {
      return;
    }

    await this.showsService.createShow(this.request)

    this.router.navigateByUrl("/shows");
  }
}
