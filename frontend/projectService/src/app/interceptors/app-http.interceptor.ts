import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private userService : UserService, private router : Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url )
    if(!request.url.includes("/login"))
    {
      let newReq=request.clone({
        headers : request.headers.set('Authorization','Bearer '+this.userService.accessToken)
      });
      return next.handle(newReq).pipe(
          catchError((err) => {
            if(err.status==403){
              this.showNotificationError()
            } else if(err.status==401){
              this.router.navigateByUrl("/Login")
            }
            return throwError(err);
          }),
          finalize(()=>{
    
          })
          );
    }else return next.handle(request)
    
  }

  private handleError(err:HttpErrorResponse){
  }

   showNotificationError() {
    this.toastr.error('Token not available');
    setTimeout(() => {
      this.router.navigateByUrl('/Login') // Reload the page after a delay
    }, 1000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  }

}
