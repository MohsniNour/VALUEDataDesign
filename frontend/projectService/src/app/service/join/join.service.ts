import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Join } from 'src/app/model/join/join';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  private baseURL = "http://localhost:8089/VALUE/joins"

  constructor(private httpClient : HttpClient) { }

  getJoinListByIdTab(id:any): Observable<Join[]>{
    return this.httpClient.get<Join[]>(`${this.baseURL}/${id}`);
  }

  getJoinById(id:number): Observable<Join>{
    return this.httpClient.get<Join>(`${this.baseURL}/getById/${id}`);
  }

  addJoin(join:Join): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`,join);
  }

  updateJoin(join:Join): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${join.idJoin}`,join);
  }

  deleteJoin(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
