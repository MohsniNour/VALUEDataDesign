import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../service/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  users !: User [];
  exist: boolean=false;
  formLogin!: FormGroup;

  constructor(private userService : UserService, private toastr: ToastrService, private fb:FormBuilder,private router: Router) { 
    this.formLogin = this.fb.group({
      userName: ['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]] 
    });
  }

  ngOnInit(): void {
    this.getUsers()
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data =>{
      this.users = data;
      console.log(this.users)
    });
  }

  register(){
    let userName = this.formLogin.value.userName;
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    this.users.forEach(el => {
      if(el.userName==userName){
        this.showNotificationError("User Name exist");
        this.exist=true
      }else if(el.email==email){
        this.showNotificationError("Email exist")
        this.exist=true
      }
    });
    if(this.exist==false){
      this.user.userName=userName;
      this.user.email=email;
      this.user.password=password;
      console.log(this.user)
      this.userService.add(this.user).subscribe(data => {
        console.log(data);
      })
      this.showNotification();
    }
    
    }
  
  showNotification() {
    this.toastr.success('User added successfully');
    setTimeout(() => {
      this.router.navigateByUrl('/Login'); 
    }, 1000);
  }

  showNotificationError(message:string) {
    this.toastr.error(message);
  }

}
