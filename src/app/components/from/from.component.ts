import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent {
  orderList = ['Electrinics', 'mobiles', 'laptops', 'desktops', 'houseHolds'];

  order$: Observable<string> = from(['Electrinics', 'mobiles', 'laptops', 'desktops', 'houseHolds']) ;

  orderName!: string;
  clicking() {
    this.order$.subscribe((data) => {
      this.orderName = data;

      console.log(data, 'from');
    });
  }
}
