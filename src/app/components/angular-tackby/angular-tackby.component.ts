import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-tackby',
  templateUrl: './angular-tackby.component.html',
  styleUrls: ['./angular-tackby.component.scss'],
  // encapsulation:ViewEncapsulation.None
})
export class AngularTackbyComponent {

  table = [
    {
      Fname:'kamaraj',
      gender:'male'
    },
    {
      Fname:'Yashaswing',
      gender:'male'

    },
    {
      Fname:'kamaraj',
      gender:'male'
    },
    {
      Fname:'Yashaswing',
      gender:'male'

    },
    {
      Fname:'kamaraj',
      gender:'male'
    },
    {
      Fname:'Yashaswing',
      gender:'male'

    },
   
    
  ]

  table_2 = [
    {
      Fname:'kamaraj',
      gender:'male'
    },
    {
      Fname:'Yashaswing',
      gender:'male'

    },
    {
      Fname:'kamaraj',
      gender:'male'
    },
    {
      Fname:'Yashaswing',
      gender:'male'

    },
    {
      Fname:'kamaraj',
      gender:'male'
    },
    {
      Fname:'Yashaswing',
      gender:'male'

    },
    {
      Fname:'Priyanka',
      gender:'Female'
    }
  ]


  tableArray :any[] = []

ngOnInit(){
  this.tableArray = this.table
}

clicking(){
  this.tableArray = this.table_2
}
customeFunction(index:number , item:any){
  return item.Fname
}

}
