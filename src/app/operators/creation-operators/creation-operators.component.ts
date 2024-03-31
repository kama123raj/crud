import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable,mergeMap, delay, from, map, of, switchMap, interval, take, concatMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss']
})
export class CreationOperatorsComponent {


  constructor(private http:HttpClient){

  }

  abc = [1,2,3,4]
  URL = 'https://jsonplaceholder.typicode.com/todos'
  mouse = from(this.abc)
  board: any;
  displaydata:any;


  ngOnInit(){
    console.log(this.mouse);

    this.board = this.http.get(this.URL);

    console.log(this.board, 'board')

if(this.board){
    this.board.pipe(
       map((x:any[])=>{
        return  x.map((value:any)=>{
          return{ 
            id: value.id,
            title: value.title
          }
        })
       }), delay(3000)
    )
    .subscribe((data: any)=>  this.displaydata = data)
  }

    this.mouse.pipe(mergeMap((x:any)=>{
      return of(x)
    })
     ).subscribe({
      next:(data:any)=>{
        console.log(data)
      }
    })


    // Switch map 
    
    this.mouse.pipe(
      switchMap((id: number)=>{
        return  ajax(this.URL+'/'+id).pipe(map((x:any)=>{ 
          // console.log(x)
        }))
      }), take(5)
    ).subscribe({
      next:(data:any)=>{
        // console.log(data)
      }
    })
  

  // concat map

  this.mouse.pipe(
    concatMap((id: number)=>{
      return  ajax(this.URL+'/'+id).pipe(map((x:any)=>{ return x}))
    })
  ).subscribe({
    next:(data:any)=>{
      console.log(data.response, 'sds') 
    }
  })
}


}

 
 
