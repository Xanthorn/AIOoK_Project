import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateMovieRequest } from 'src/contracts/requests/Movies/CreateMovieRequest';
import { MoviesService } from 'src/services/movies.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  request?: CreateMovieRequest;

  form: FormGroup;

  constructor(private fb: FormBuilder, private moviesService: MoviesService, private router: Router) {
    this.form = this.fb.group({
      title: [ '', [
        Validators.required,
        Validators.maxLength(200)
      ]],
      durationHours: [ '', [
        Validators.required,
        Validators.min(0),
        Validators.max(9)
      ]],
      durationMinutes: [ '', [
        Validators.required,
        Validators.min(0),
        Validators.max(59)
      ]]
    })
   }

  ngOnInit(): void {
  }

  async submitForm() {
    this.request = Object.assign({}, this.form.value);

    if (this.request == undefined) {
      return;
    }

    await this.moviesService.createMovie(this.request)

    this.router.navigateByUrl("/movies");
  }

}
