import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  URL = 'https://jsonplaceholder.typicode.com/todos';

  board: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.board = this.http.get<any[]>(this.URL);
  }

  clicking() {
    this.board
      .pipe(
        filter((v:any)=>{
          
            return this.checkCompleted(v);
        })
      )
      .subscribe({
        next: (data: any) => {
          console.log(data, 'data'); // This will log each filtered todo object
        },
        error: (err: any) => {
          console.log(err);
        }
      });
  }
  checkCompleted(v:any){
   return v.map((a:any)=>{
    // console.log(a.completed)
      if(a.completed == true){
        console.log('true')
        return true
      } else {
        console.log('false')
        
        return false
      }
    })
  }
}