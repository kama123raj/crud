import { ChangeDetectionStrategy, Component, Input, SimpleChange } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrls: ['./scss.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ScssComponent {

  @Input() item!:number | string ;

  fromService : any;

  render() {
    console.log('render HTML')
  }

  constructor( private book:BooksService) {
       this.book.valuies.subscribe((data)=>{
        this.fromService =  data
    })
      }
    
ngOnChanges(vals:SimpleChange){
console.log(vals)
}
}
