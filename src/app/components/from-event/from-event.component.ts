import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent {

@ViewChild('buttonFrom') buttonFrom!: ElementRef;
@ViewChild('getLink') getLink!: ElementRef;

 
ngOnInit(){}

ngAfterViewInit(){
  console.log('hover')
    const getObj = fromEvent(this.getLink?.nativeElement,'mouseover');
    getObj.subscribe((data)=>{
      console.log(data)
    })

}
 
  clicking(){
 const btnObs =  fromEvent(this.buttonFrom?.nativeElement, 'click');
 btnObs.subscribe((data)=>{
  console.log(data, 'take')
 })
  }

  clikingTwo(){

  }

}
