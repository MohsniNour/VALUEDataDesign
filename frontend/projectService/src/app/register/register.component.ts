import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../service/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.user)
    this.userService.add(this.user).subscribe(data => {
      console.log(data);
    })
    this.showNotification();
    }
  
  showNotification() {
    this.toastr.success('User added successfully');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

  showNotificationError() {
    this.toastr.error('User exist');
  }

}
