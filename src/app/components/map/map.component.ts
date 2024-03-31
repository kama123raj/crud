import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

ngOnInit(){
let obj$ = of(1,2,3,4,5)


obj$.pipe(
  map((x)=> x * 10 )).subscribe((data)=>{
  console.log(data)
})

}

}
