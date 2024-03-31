import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
  searchForm !: FormGroup<any>

  constructor(private fb:FormBuilder){
    
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchInput: [''] // Setting initial value for the form control
    });

    this.searchForm.get('searchInput')?.valueChanges.pipe(
      take(5) // Take first two values only
      // debounceTime(500)
    ).subscribe((data) => {
      console.log(data, 'data');
    });
  }

}
