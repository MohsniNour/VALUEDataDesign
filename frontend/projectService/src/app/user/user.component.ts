import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'projectService';
  sideBarStatus = true;

  ngOnInit(){}

  sideBarToggler(){
    this.sideBarStatus = !this.sideBarStatus;
  }

}
