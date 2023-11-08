import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projectService';
  sideBarStatus = true;
  connectedUser: any;

  constructor(private userService : UserService){}

  ngOnInit(){
    this.userService.loadJwtTokenFromLocalStorage();
  }

  sideBarToggler(){
    this.sideBarStatus = !this.sideBarStatus;
  }
}
