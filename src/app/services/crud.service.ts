import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseURL:string = environment.crudUrl.concat('/posts')
  constructor(private http:HttpClient) { }
  getPosts<T>(): Observable<T[]> {
    return this.http.get<T[]>(this.baseURL)
  }
  getPost(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.baseURL+'/'+id)
  }
  createPost(post:any):Observable<any[]>{
    return this.http.post<any[]>(this.baseURL, post);
  }
  updatePost(id:number, post:any):Observable<any>{
    return this.http.put<any>(this.baseURL+'/'+id, post)
  }
  deletePost(id:number):Observable<any>{
    return this.http.delete<any>(this.baseURL+'/'+id)
  }
  
}
