import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() sideBarToggled = new EventEmitter<Boolean>();
  menuStatus: Boolean = false;

  constructor(public userService : UserService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {}

  togglesidebar(){
    this.menuStatus= ! this.menuStatus;
    this.sideBarToggled.emit(this.menuStatus)
  }

  handleLogout(){
    this.userService.logout()
  }
}
