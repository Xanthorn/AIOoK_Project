import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuditoriumsService {
  protected baseUrl = `${environment.api_url}/auditoriums`

  constructor(private httpClient: HttpClient) { }

  getAuditoriums(): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }
}
