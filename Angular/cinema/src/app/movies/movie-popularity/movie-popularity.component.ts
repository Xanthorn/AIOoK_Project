import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetPopularityOfMovieByDateRequest } from 'src/contracts/requests/Movies/GetPopularityOfMovieByDateRequest';
import { Popularity } from 'src/contracts/responses/Movies/Popularity';
import { Movie } from 'src/models/Movie';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-popularity',
  templateUrl: './movie-popularity.component.html',
  styleUrls: ['./movie-popularity.component.css']
})
export class MoviePopularityComponent implements OnInit {
  form: FormGroup;
  movies: Movie[] = [];

  selectDate: Date = new Date();
  fetchedPopularityData?: Popularity;
  request?: GetPopularityOfMovieByDateRequest;

  constructor(private fb: FormBuilder, private moviesService: MoviesService) {
    this.form = this.fb.group({
      id: ['', [
        Validators.required,
      ]],
      date: [ '', [
        Validators.required
      ]]
    });
   }

  async ngOnInit(): Promise<void> {
    this.movies = await this.moviesService.getMovies();
    console.log("Movies was fetched correctly");
  }

  async find(){
    this.request = Object.assign({}, this.form.value);
    
    if (this.request == undefined) {
      return;
    }
    this.selectDate = this.request.date;

    this.fetchedPopularityData = await this.moviesService.getPopularityOfMovieByDate(
      this.request.id, 
      new Date(this.request.date).getFullYear(), 
      new Date(this.request.date).getMonth() +1, 
      new Date(this.request.date).getDate());
      console.log(this.fetchedPopularityData);
      
  }
}
