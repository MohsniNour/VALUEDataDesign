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
  exist:boolean=true;
  formLogin!: FormGroup;

  constructor(private userService : UserService, private toastr: ToastrService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin= this.fb.group({
      userName : this.fb.control(""),
      password : this.fb.control("")
    })
    this.getUsers()
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data =>{
      this.userList = data;
      console.log(this.userList)
    });
  }

  login() {
    let userName = this.formLogin.value.userName;
    let password = this.formLogin.value.password;
    console.log(this.formLogin.value);
    this.userList.forEach(el => {
      if(el.userName!=userName){
        this.exist=false;
      }
    });
    if(this.exist==true){
    this.userService.login(userName,password)
       .subscribe({
        next : data =>{
          console.log(data)
          this.userService.loadData(data);
          this.router.navigateByUrl('/User/Home');
        },
        error : err =>{
          console.log(err);
          if (err.status === 403) {
            this.showNotificationError(); 
          }}
      });
    }else{
      this.showNotificationErrorParams("User Name not exist"); 
    }
  }
  showNotificationError() {
    this.toastr.error('User not exist you have to register before');
    setTimeout(() => {
      window.location.reload();
    }, 1000); 
  }
  showNotificationErrorParams(message:string) {
    this.toastr.error(message);
    setTimeout(() => {
      this.router.navigateByUrl('/Register');
    }, 1000); 
  }

}
