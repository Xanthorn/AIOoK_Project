import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute ,Router } from '@angular/router';
import { EditMovieRequest } from 'src/contracts/requests/Movies/EditMovieRequest';
import { Movie } from 'src/models/Movie';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  form: FormGroup;

  id?: string | null = '';
  movie?: Movie;

  request?: EditMovieRequest;

  constructor(private fb: FormBuilder, private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) {
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

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id !== null) {
      this.movie = await this.moviesService.getMovieById(this.id);
      this.form.patchValue(this.movie!);
    }
  }

  async submitForm() {
    this.request = Object.assign({}, this.form.value);

    if (this.request == undefined) {
      return;
    }

    this.id = this.route.snapshot.paramMap.get('id');
    await this.moviesService.editMovie(this.id!, this.request)

    this.router.navigateByUrl("/movies");
  }
}
