import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient:HttpClient) { }

  getData<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url).pipe(
      catchError((error) => {
        console.error('An error occurred:', error, this.handleError);
        throw error; // Rethrow the error or handle it as needed
      })
    );
  }

 
  callMultipleApi<T> (urls:any[]):Observable<T[]>  {
    return forkJoin(urls.map((url:any) => this.httpClient.get<T>(url)))
  }

  

  private handleError(error: HttpErrorResponse): Observable<never> {
  
    console.error('HTTP error:', error);

    // Return a user-friendly error message or rethrow the error
    return throwError('Something went wrong. Please try again later.');
  }
 


}
