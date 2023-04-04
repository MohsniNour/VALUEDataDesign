import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from 'src/app/model/model/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private baseURL = "http://localhost:8089/VALUE/models"

  constructor(private httpClient : HttpClient) { }

  getModelListByIdProject(id:any): Observable<Model[]>{
    return this.httpClient.get<Model[]>(`${this.baseURL}/`+id);
  }
}
