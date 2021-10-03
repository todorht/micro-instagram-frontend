import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any){
    this.authService.loginUser(loginForm.username, loginForm.password);
    this.router.navigate(['/posts'])
  }

}
