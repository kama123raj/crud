import { Injectable, signal } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
  signOut,
} from 'firebase/auth'
import { BehaviorSubject, Subject } from 'rxjs';
 
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  setToken = new Subject;
 
   
  constructor() { 
  this.setToken.next(localStorage.getItem('currentUser'))
  }

  logincomp(email:string, pass:string){
    let auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
    .then((response)=>{
      this.getTokken();
      console.log('signIn Success')
      console.log(response,)
    })
    .catch((err)=>{
      console.log('signIn failure')
      console.log(err)
    })
    
  }

  register(email:string, pass:string){
    let auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
    .then((response)=>{
     
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  logout(){
    let auth = getAuth();
    signOut(auth)
    .then((response)=>{
      console.log('signOut SuccessFuly');
      this.tokken = null;
      localStorage.setItem('currentUser', this.tokken);
    })
    .catch((err)=>{
      console.log(err,'error happend')
    })
  }

  tokken : any;

 async getTokken(){
    let auth = getAuth();
    try{
      this.tokken = await auth.currentUser?.getIdToken();
      this.setToken.next(this.tokken);
      localStorage.setItem('currentUser', this.tokken);
    }
    catch(err) {
      console.log(err,'error happend')
      this.tokken = null
    }

    return this.tokken
  }


}
 

