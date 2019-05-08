import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User;
  constructor() { }

  sudahLogin() : boolean{
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return this.currentUser != null;
  }

  login(username: string, password: string) {
    this.currentUser = new User(username, password);
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
  }
}
