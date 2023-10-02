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

  addTab(tab:Tab,id:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add/${id}`,tab);
  }

  updateTab(tab:Tab): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${tab.idTable}`,tab);
  }

  deleteTab(id:any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
  
}
