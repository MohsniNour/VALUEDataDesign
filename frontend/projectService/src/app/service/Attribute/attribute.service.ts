import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribute } from 'src/app/model/Attribute/attribute';
import { Tag } from 'src/app/model/Tag/tag';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private baseURL = "http://localhost:8089/VALUE/attributes"
  constructor(private httpClient : HttpClient) { }

  getAttributeList(): Observable<Attribute[]>{
    return this.httpClient.get<Attribute[]>(`${this.baseURL}`);
  }

  getAttributeListByIdTab(id:any): Observable<Attribute[]>{
    return this.httpClient.get<Attribute[]>(`${this.baseURL}/${id}`);
  }

  getTagsForAttribute(attributeId: any): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${this.baseURL}/${attributeId}/tags`);
  }

  exportAttributeListByIdTab(id:any): void{
    this.httpClient.get<Blob>(`${this.baseURL}/export/excel/${id}`, { responseType: 'blob' as 'json' }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'TabAttribute.xlsx';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  addAttribute(attribute:Attribute,id:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add/${id}`,attribute);
  }

  updateAttribute(attribute:Attribute): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${attribute.idAttribute}`,attribute);
  }

  deleteAttribute(id:any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}