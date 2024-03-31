import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  useForm ! : FormGroup;

  bookForm ! :FormGroup;

  myBook:any;

  databasebook:any[] =  [];

  constructor(private _book:BooksService) {}


  ngOnInit(){

    this.useForm = new FormGroup({
      'firstName': new FormControl(null,Validators.required),
      'lastName': new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.required),
      'mobile': new FormControl(null,Validators.required),
      'gender': new FormControl('male',Validators.required)
    })
    this.bookForm = new FormGroup({
      'id': new FormControl(null,Validators.required),
      'BookName': new FormControl(null,Validators.required),
      'author': new FormControl(null,Validators.required),
    })

  }


  submitForm() {
    console.log(this.useForm.value)
  }
  addBook(){
    let id = this.bookForm.get('id')?.value;
    let bookName = this.bookForm.get('BookName')?.value;
    let author = this.bookForm.get('author')?.value;
    this.myBook = {id, bookName, author}
    console.log(this.myBook)
  }

  onSave(){
    this._book.saveBook(this.myBook).subscribe({
      next: (data) => {
        console.log(data);  
      },
      error: (err) => {
        console.log(err); 
      }
    })
   
    
  }
  getBook(){
    this._book.getdata().subscribe({
      next: (data) => {
        this.databasebook = data;
        console.log(data.data);  
      },
      error: (err) => {
        console.log(err); 
      }
    })
  }

}
