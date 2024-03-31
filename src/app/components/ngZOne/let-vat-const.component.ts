import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, NgZone, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-let-vat-const',
  templateUrl: './let-vat-const.component.html',
  styleUrls: ['./let-vat-const.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetVatConstComponent {

  
 @Input() mark1 : any

 
  
test  = 'kamaraj';
number = 0;
interval : any;

constructor( private zone:NgZone,  private cdr: ChangeDetectorRef){
  // this.cd.detach();

}

  ngOnInit(){
      console.log('ngOnInit');
      this.zone.runOutsideAngular(() => {
      setInterval(() => {
        
       this.number = Math.random();
       this.cdr.detectChanges();
       
    }, 1000);
  });
  }


 
  // ngOnChanges()	{
  //   console.log(this.mark1,'ngOnChanges');
  //   this.test = '12'
  // }

  // ngDoCheck()	{
  //   console.log('ngDoCheck')

  // }

  // ngAfterContentInit()	{
  //   console.log('ngAfterContentInit')

  // }

  // ngAfterContentChecked()	{
  //   console.log('ngAfterContentChecked')

  // }

  // ngAfterViewInit()	{
  //   console.log('ngAfterViewInit')

  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy')
  // }
 
}
