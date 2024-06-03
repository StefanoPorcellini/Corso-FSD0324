import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkLogin:boolean = false

  constructor(
    private router:Router
  ) { }

  login(){
    this.checkLogin = true
    this.router.navigate(['/login'])
  }

  loginForm(){
    this.router.navigate(['home'])
  }

}
