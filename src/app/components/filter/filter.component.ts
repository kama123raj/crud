import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  searchForm !: FormGroup<any>

  constructor(private fb:FormBuilder){
    
  }

ngOnInit(){
  this.searchForm =  new FormGroup ({
    searchInput: new FormControl('')
  })
}
  
  readValue(){
    // let val = this.searchForm.value.searchInput.valueChnages

    this.searchForm.get('searchInput')?.valueChanges.pipe(
      filter((v)=> this.charCount(v))
    ).subscribe((data)=>{
      console.log(data, 'data')
    })
     
  }

  charCount(ele : any){
    return ele.length <= 10 ? true : false
  }

  checkCOndition(v:any){
    return v.length > 5 ? false : true
  }
}
