import { Injectable } from '@angular/core';

export class Message{
  content!: string;
  style!:string;
  dismissed: boolean=false;

  constructor(content:string,style:string) {
    this.content=content;
    this.style=style||'info';
   }
  
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
}
