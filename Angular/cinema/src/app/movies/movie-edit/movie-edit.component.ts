import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  form: FormGroup;

  movie: Movie = {
    id: "1",
    title: "Epoka Lodowcowa",
    durationHours: 2,
    durationMinutes: 3
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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
    })
   }

  ngOnInit(): void {
  }

}
