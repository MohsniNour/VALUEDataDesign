import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../service/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList!: User[];
  formLogin!: FormGroup;

  constructor(private userService : UserService, private toastr: ToastrService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin= this.fb.group({
      userName : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  login() {
    let userName = this.formLogin.value.userName;
    let password = this.formLogin.value.password;
    console.log(this.formLogin.value);
    this.userService.login(userName,password)
       .subscribe({
        next : data =>{
          console.log(data)
          this.userService.loadData(data);
          this.router.navigateByUrl('/User/Home');
          // this.showNotification()
        },
        error : err =>{
          console.log(err);
          if (err.status === 403) {
            this.showNotificationError(); 
          }}
      });
    //     next : (resp:any) => {
    //       //this.authService.token=resp.headers.get("x-auth-token")!;
    //       console.log(resp)
    //       this.userService.token=resp.body['access-token']!
    //       this.router.navigateByUrl('/');
    //       this.userService.loadProfile().subscribe({
    //         next :data => {
    //           this.userService.profile=data;
    //           this.userService.isAuthenticated=true;
    //         }
    //       })
    //       console.log(this.userService.token)
    //     }
    //   })
  }

  // login(){
  //   // const isUserExist = this.userList.some(obj => obj.userName === this.user.userName);
  //   // if (isUserExist) {
  //     console.log(this.user)
  //     // this.userService.login(this.user)
  //     this.userService.login(this.user).subscribe(data => {
  //       console.log(data);
  //       // localStorage.setItem('connectedUser',JSON.stringify(data));
  //     })
  //     //localStorage.setItem('connectedUser',JSON.stringify(this.userList));
  //     // this.showNotification();
  //   // } else {   
  //   //   this.showNotificationError();
  //   // }
  // }

  // showNotification() {
  //   this.toastr.success('Login successfully');
  //   setTimeout(() => {
  //     this.router.navigateByUrl('/User/Home') // Reload the page after a delay
  //   }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  // }

  showNotificationError() {
    this.toastr.error('User not exist you have to register before');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
