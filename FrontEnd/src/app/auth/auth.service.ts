import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public state: {
    isLoggedin$: BehaviorSubject<boolean>;
  } = {
    isLoggedin$: new BehaviorSubject<boolean>(false),
  }
  public myGlobalVar$ = new BehaviorSubject<any>("Chaitanya");

  constructor() { }

  isLoggedin() {
    const loggedIn = !!localStorage.getItem('token'); // will return a boolen value
    this.state.isLoggedin$.next(loggedIn)
    return loggedIn; 
  }
}
