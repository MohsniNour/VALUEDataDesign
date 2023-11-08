import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8089/VALUE";
  isAuthenticated :boolean = false;
  accessToken :any;
  refreshToken :any;
  userName :any;
  profile : any;
  token : any;
  connectedUser: any;

  constructor(private httpClient : HttpClient, private router : Router) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/users`);
  }

  getUserById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/users/getById/${id}`);
  }

  add(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/register`,user);
  }

  login(userName: string, password: string){
    let options = {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    let params = new HttpParams()
      .set('userName', userName)
      .set('password',password);
  
    return this.httpClient.post(`${this.baseURL}/login`,params,options);
  }

  loadProfile() {
    return this.httpClient.get(`${this.baseURL}/profile`);
  }

  loadData(data:any) {
    this.accessToken = data["access-token"];
    this.refreshToken = data["refresh-token"];
    console.log("access-token :",this.accessToken);
    console.log("refresh-token :",this.refreshToken);
    let decodedJwt = jwtDecode(this.accessToken);
    this.userName = decodedJwt.sub;
    window.localStorage.setItem("jwt-token",this.accessToken);
    if(window.localStorage.getItem("jwt-token")){
      this.isAuthenticated=true;
    }

  }

  logout() {
    this.isAuthenticated=false;
    this.profile=undefined;
    this.accessToken=undefined;
    this.userName = undefined;
    window.localStorage.removeItem("jwt-token");
    this.router.navigateByUrl('/Login');
  }

  loadJwtTokenFromLocalStorage(){
    let token = window.localStorage.getItem("jwt-token")
    if(token){
      this.loadData({"access-token" :token})
      // this.router.navigateByUrl("/User/Home");
    }
  }

  
}
 