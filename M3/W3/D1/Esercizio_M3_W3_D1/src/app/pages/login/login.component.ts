import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authSvc:AuthService){}

  login(){
    this.authSvc.loginForm()
  }


}
