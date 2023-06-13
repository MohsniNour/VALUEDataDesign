import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribute } from 'src/app/model/Attribute/attribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private baseURL = "http://localhost:8089/VALUE/attributes"
  constructor(private httpClient : HttpClient) { }

  getAttributeListByIdTab(id:any): Observable<Attribute[]>{
    return this.httpClient.get<Attribute[]>(`${this.baseURL}/${id}`);
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
}