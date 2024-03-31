import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  
})
export class AuthComponent {
  firebaseConfig:any

  constructor(private _auth:AuthService) {

  }

ngOnInit(){
  this.firebaseConfig = {
    apiKey: "AIzaSyByNaYOZCwp3sA-IaWT6xxphDH37JwZ4so",
    authDomain: "angular-302913.firebaseapp.com",
    databaseURL: "https://angular-302913-default-rtdb.firebaseio.com",
    projectId: "angular-302913",
    storageBucket: "angular-302913.appspot.com",
    messagingSenderId: "615013414347",
    appId: "1:615013414347:web:5899acbcc11e92e625b24e",
    measurementId: "G-T9H9VGFXKN"
  };
  initializeApp(this.firebaseConfig);
}

logoutUser(){
this._auth.logout();
}

}
 

