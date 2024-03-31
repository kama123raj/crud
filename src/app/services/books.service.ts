import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http:HttpClient) {}
  
  URL : string = 'https://angular-302913-default-rtdb.firebaseio.com/data.json';

  saveBook(book:string[]):Observable<any>{
    return this._http.post(this.URL,book)
  }
  
  getdata():Observable<any>{
    return this._http.get(this.URL)
  }


}
