import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsService } from '../services/forms.service';
import { iAuthData } from '../../../models/auth-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private formsSvc:FormsService,
    private authSvc:AuthService
  ){}

  userForm!:FormGroup

  

  ngOnInit(){
    this.userForm = this.formsSvc.getUserLogin()
    this.authSvc.autoLogin()
  }

  login(){
    this.formsSvc.login()
  }

}
