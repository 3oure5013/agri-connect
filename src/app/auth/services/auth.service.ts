import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userAuthenticated: boolean = true;

  constructor() { }

  get logState() {
    return this._userAuthenticated;
  }

  
  login() {
    this._userAuthenticated = true;
  }

  logout() {
    this._userAuthenticated = false;
  }
}
