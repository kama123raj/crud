import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OFComponent {


  litsArray = ['mark', 'john', 'little','guna', 'santa']
  student: Observable<string[]> = of(this.litsArray);

  studentName:Observable<string> = of('kamaraj');

  obj = {
    id:10,
    name:'mark Antoney'
  }
  studenObj :Observable<any> = of(this.obj)


clicking(){
  this.student.subscribe((data)=>{
    console.log(data, 'array')
  })
  this.studentName.subscribe((data)=>{
    console.log(data, 'String')
  }),
  this.studenObj.subscribe((data)=>{
    console.log(data, 'Object')
  })
}

}
