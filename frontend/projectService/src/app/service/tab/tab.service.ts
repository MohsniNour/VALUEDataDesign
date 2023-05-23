import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tab } from 'src/app/model/tab/tab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private baseURL = "http://localhost:8089/VALUE/tabs"

  constructor(private httpClient : HttpClient) { }

  getTabListByIdModel(id:any): Observable<Tab[]>{
    return this.httpClient.get<Tab[]>(`${this.baseURL}/${id}`);
  }

  getTabById(id:number): Observable<Tab>{
    return this.httpClient.get<Tab>(`${this.baseURL}/getById/${id}`);
  }
  
}
