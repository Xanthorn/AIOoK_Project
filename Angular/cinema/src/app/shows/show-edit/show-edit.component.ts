import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditShowRequest } from 'src/contracts/requests/Shows/EditShowRequest';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';
import { Show } from 'src/models/Show';
import { ShowsService } from 'src/services/shows.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';
import { AuditoriumsService } from 'src/services/auditoriums.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {
  form: FormGroup;

  id?: string | null = '';
  movies: Movie[] = [];
  auditoriums: Auditorium[] = [];
  show?: Show;

  request?: EditShowRequest;

  constructor(private fb: FormBuilder, private showsService: ShowsService, private moviesService: MoviesService, 
    private auditoriumsService: AuditoriumsService, private router: Router, private route: ActivatedRoute) {
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

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id !== null) {
      this.show = await this.showsService.getShowById(this.id);
      this.form.patchValue(this.show!);
    }
  }

  async submitForm(){
    this.request = Object.assign({}, this.form.value);

    if (this.request == undefined) {
      return;
    }

    this.id = this.route.snapshot.paramMap.get('id');
    await this.showsService.editShow(this.id!, this.request)

    this.router.navigateByUrl("/shows");
  }
}
