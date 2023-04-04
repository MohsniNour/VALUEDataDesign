import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Project } from 'src/app/model/project/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL = "http://localhost:8089/VALUE/projects"

  constructor(private httpClient : HttpClient) { }

  getProjectList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }

  getProjectById(id:number): Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL}/getById/${id}`);
  }

  deleteProject(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
