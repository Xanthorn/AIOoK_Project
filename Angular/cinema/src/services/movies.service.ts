import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  protected baseUrl = `${environment.api_url}/movies`

  constructor(private httpClient: HttpClient) { }

  getMovies(): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }

}
