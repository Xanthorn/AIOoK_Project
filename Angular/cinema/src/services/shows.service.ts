import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateShowRequest } from 'src/contracts/requests/Shows/CreateShowRequest';
import { EditShowRequest } from 'src/contracts/requests/Shows/EditShowRequest';
import { BuyTicketsRequest } from 'src/contracts/requests/Shows/BuyTicketsRequest';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  protected baseUrl = `${environment.api_url}/shows`

  constructor(private httpClient: HttpClient) { }

  getShows(): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }

  getShowById(id: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  createShow(request: CreateShowRequest) {
    return this.httpClient.post<any>(this.baseUrl, request).toPromise();
  }

  editShow(id: string, request: EditShowRequest) {
    return this.httpClient.patch<any>(`${this.baseUrl}/${id}`, request).toPromise();
  }

  deleteShow(id: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  getShowsByDate(year: number, month: number, day: number) {
    return this.httpClient.get<any>(`${this.baseUrl}/${year}/${month}/${day}`).toPromise();
  }

  getCurrentShows(): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/now`).toPromise();
  }

  buyTickets(id: string, request: BuyTicketsRequest) {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}/buy-tickets`, request).toPromise();
  }
}