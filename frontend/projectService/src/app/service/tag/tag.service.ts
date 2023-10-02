import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/model/Tag/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseURL = "http://localhost:8089/VALUE/tags"

  constructor(private httpClient : HttpClient) { }

  getTagList(): Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(`${this.baseURL}`);
  }

  getTagListByIdAttribute(id:any): Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(`${this.baseURL}/${id}`);
  }

  getTagById(id:number): Observable<Tag>{
    return this.httpClient.get<Tag>(`${this.baseURL}/getById/${id}`);
  }

  addTag(tag:Tag): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`,tag);
  }

  updateTag(tag:Tag): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${tag.idTag}`,tag);
  }

  deleteTag(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
