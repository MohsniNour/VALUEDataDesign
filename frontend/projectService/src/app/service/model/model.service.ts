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

  getModelList(): Observable<Model[]>{
    return this.httpClient.get<Model[]>(`${this.baseURL}`);
  }

  getModelListByIdProject(id:any): Observable<Model[]>{
    return this.httpClient.get<Model[]>(`${this.baseURL}/${id}`);
  }

  getModelById(id:number): Observable<Model>{
    return this.httpClient.get<Model>(`${this.baseURL}/getById/${id}`);
  }

  addModel(model:Model,id:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add/${id}`,model);
  }

  updateModel(model:Model): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${model.idModel}`,model);
  }

  deleteModel(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
