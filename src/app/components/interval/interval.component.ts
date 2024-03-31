import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  orderList = ['Electrinics', 'mobiles', 'laptops', 'desktops', 'houseHolds'];

  order$: Observable<any> = of(['Electrinics', 'mobiles', 'laptops', 'desktops', 'houseHolds']) ;

  orderName!: string;
  clicking() {
    this.order$.subscribe((data) => {

      const seq$ = interval(500)

     seq$.subscribe((num)=>{
      if(num < 5){
      console.log(data + num)
      }
     })
     
      this.orderName = data;
      console.log(data, 'from');
    });
  }
}
