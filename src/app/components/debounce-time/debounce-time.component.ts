import { Component } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent {

  searchForm !: FormGroup<any>

  constructor(private fb:FormBuilder){
    
  }

  ngOnInit(){
    // this.searchForm = this.fb.group({
    //   searchInput:[Validators.required,]
    // })

    this.searchForm =  new FormGroup ({
      searchInput: new FormControl('start Search')
    })
  }

  readValue(){
    // let val = this.searchForm.value.searchInput.valueChnages

    this.searchForm.get('searchInput')?.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe((data)=>{

      console.log(data, 'data')
    })
     
  }

  
}
