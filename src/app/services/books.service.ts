import { HttpClient } from '@angular/common/http';
import { Injectable, effect } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  output : any;
  constructor(private _http: HttpClient, private _auth: AuthService) {
    
   
  }

  URL: string =
    'https://angular-302913-default-rtdb.firebaseio.com/data.json?auth=';

  saveBook(book: string[]): Observable<any> {
    return this._http.post(this.URL, book);
  }
  

  tk: any = null;

  getdata(): Observable<any> {
    // this.output = (localStorage.getItem('currentUser'))
    //   console.log(this.output); 
      return this._http.get(this.URL + this.output);
  }

  valuies = new BehaviorSubject(1) ;
  addOne(){
    this.valuies.next(45)
  }
}
