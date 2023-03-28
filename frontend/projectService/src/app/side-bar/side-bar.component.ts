import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() sideBarStatus : Boolean = false;
  list = [
    {
      number : '1',
      name:'Home',
      icon : 'fa-solid fa-house'
    },
    {
      number : '2',
      name:'Projects',
      icon : 'fa-solid fa-folder',
    },
    {
      number : '3',
      name:'Tags',
      icon : 'fa-solid fa-tag'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
