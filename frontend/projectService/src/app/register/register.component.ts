import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../service/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  formLogin!: FormGroup;

  constructor(private userService : UserService, private toastr: ToastrService, private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.formLogin= this.fb.group({
      userName : this.fb.control(""),
      email : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  register(){
    let userName = this.formLogin.value.userName;
    let email = this.formLogin.value.userName;
    let password = this.formLogin.value.password;
    this.user.userName=userName;
    this.user.email=email;
    this.user.password=password;
    console.log(this.user)
    this.userService.add(this.user).subscribe(data => {
      console.log(data);
    })
    this.showNotification();
    }
  
  showNotification() {
    this.toastr.success('User added successfully');
    setTimeout(() => {
      this.router.navigateByUrl('/Login'); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

  showNotificationError() {
    this.toastr.error('User exist');
  }

}
