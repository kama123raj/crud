import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, distinct, from, skip } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent {

  searchForm !: FormGroup<any>;
  categoryArray = ['Tv','mobile','fan','laptop','mouse', 'phone', 'charger', 'cover', 'table','watch','Tv','mobile','fan','laptop','mouse'];
  category$:Observable<any> = from(this.categoryArray);
  ranks = [2,5,1,5,47,51,5,58];

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
      distinct(), skip(3)
    ).subscribe( cat =>{
      console.log(cat)
    })
  })

}
}
