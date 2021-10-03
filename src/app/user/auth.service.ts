import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.mode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8888'

  currentUser:IUser | undefined;

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string){
    if(this.users.find(user => user.username===username && user.password ===password)){
      this.currentUser = this.users.find(user => user.username===username && user.password ===password);
    }else{
      console.log("User not found.") //da vrati poraka na ekran
    }

  }

  logout(){
    this.currentUser = undefined;
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  getCurrentUser(){
    return this.currentUser?.username;
  }

  users: IUser[] = [
      {
        username: "hto",
        password: "hto"
      },
      {
        username: "admin",
        password: "admin"
      },
      {
        username: "test",
        password: "test"
      }
    ]
}
