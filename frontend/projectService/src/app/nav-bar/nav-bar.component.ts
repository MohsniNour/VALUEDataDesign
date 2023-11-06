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
    this.showNotification()
  }

  showNotification() {
    this.toastr.success('Log Out successfully');
    setTimeout(() => {
      this.router.navigateByUrl('/Login') // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
