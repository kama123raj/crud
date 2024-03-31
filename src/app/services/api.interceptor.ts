import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interCeptor')
    let authToken  = '1245';
    const modifiedUrl = request.url + '/users'; 
    let authReq = request.clone({
      headers: request.headers.set('Atherization', authToken),
      // url: modifiedUrl,
  })
    // return next.handle(authReq) 

    // ---------------------------------used to throw error in comman api call ------------------
    // .pipe(
    // catchError((error:HttpErrorResponse)=>{
    //   console.error('HTTP Error:', error);
    //   return throwError(error);
    // }))

    return next.handle(request).pipe(
      tap((event:any) => {
        if (event instanceof HttpResponse) {
          console.log('HTTP Response:', event);
        }
      })
    );
  }
}
