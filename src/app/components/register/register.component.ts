import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {


  registerForm!: FormGroup ;

  constructor(private _auth:AuthService, private book:BooksService) {
this.fromService = this.book.addOne()
  }

  
  ngOnInit(){
    this.registerForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
 
  }
  onRegister(){
    const usernameValue = this.registerForm.get('username')?.value;
    const emailValue = this.registerForm.get('email')?.value;
    const passwordValue = this.registerForm.get('password')?.value;
    this._auth.register(emailValue, passwordValue)
  }

  fromService : any;


}
