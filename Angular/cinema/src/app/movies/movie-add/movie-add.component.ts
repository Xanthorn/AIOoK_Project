import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  form: FormGroup;

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

  submitForm() {
    
  }

}
