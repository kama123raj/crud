import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { distinct, filter } from 'rxjs/operators';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})  
export class DistinctComponent {

  searchForm !: FormGroup<any>;

  categoryArray = ['Tv','mobile','fan','laptop','mouse', 'phone', 'charger', 'cover', 'table','watch','Tv','mobile','fan','laptop','mouse'];
  category$:Observable<any> = from(this.categoryArray);
  ranks = [2,5,1,5,47,51,5,58];
  rank$:Observable<any[]>  = of(this.ranks)

  constructor(private fb:FormBuilder){
    
  }

ngOnInit(){
  this.searchForm =  new FormGroup ({
    searchInput: new FormControl('s')
  })
  this.readValue()
}
  
  readValue(){
    // let val = this.searchForm.value.searchInput.valueChnages
    this.searchForm.get('searchInput')?.valueChanges.subscribe(data =>{
      console.log(data, 'data');

      this.category$.pipe(
        distinct()
      ).subscribe( cat =>{
        console.log(cat)
      })
    })
     
  }

  charCount(ele : any){
    return ele.length <= 10 ? true : false
  }

  checkCOndition(v:any){
    return v.length > 5 ? false : true
  }
}
