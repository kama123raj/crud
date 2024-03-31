import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostBinding, NgModule, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  
})
export class RxjsLearningComponent {
  constructor(private http: HttpClient, private el: ElementRef, private book:BooksService, private activated : ActivatedRoute) {}
  @HostBinding('class.green') isVisibleInView = false;

  agent!: Observable<string>;

  url: any; 

  ngOnInit(): void {
    this.url = 'https://dummyjson.com/products/1';

    setTimeout(() => {
      this.url = 'https://dummyjson.com/products/1';
    }, 10000);
    let fullPage = this.activated.snapshot.data['fullPage'];
    console.log(fullPage)

    this.http.get(this.url).subscribe({
      next: (data)=>{
        console.log(data)
      }
    })


    this.agent = new Observable((obs) => {
      obs.next('raj');
      obs.next('Mask');
      obs.next('rajesh');
      obs.error;
      setTimeout(() => {
        obs.next('kamar');
        obs.complete();
      }, 1000);
    });
  }

  clicking() {
    this.agent.subscribe((data) => {
      console.log(data);
    });

    this.http.get(this.url).subscribe((data) => {
      console.log(data);
    });
  }

  mapForEach() {
    let arr = [1, 2, 3, 4, 5];
   

    let each = arr.forEach((num, index) => {
      return num * 2;
      // arr[index] = num *2;
    });
    console.log(arr, 'each');
    console.log(each, 'each');



    let arr2 = [1, 2, 3, 4, 5];
    let mapping = arr2.map((num, index) => {
     return num * 2;
      // arr2[index] = num *2;
    });
    console.log(arr2, 'mapping');
    console.log(mapping, 'mapping');
  }


  clik(){
  this.book.addOne()
  }
 
 

}
