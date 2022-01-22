import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMovieRequest } from 'src/contracts/requests/Movies/CreateMovieRequest';
import { EditMovieRequest } from 'src/contracts/requests/Movies/EditMovieRequest';
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

  getMovieById(id: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  createMovie(request: CreateMovieRequest) {
    return this.httpClient.post<any>(this.baseUrl, request).toPromise();
  }

  editMovie(id: string, request: EditMovieRequest) {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, request).toPromise();
  }

  deleteMovie(id: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  getPopularityOfMovieByDate(id: string, year: number, month: number, day: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}/${year}/${month}/${day}`).toPromise();
  }
}
