import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { iAuthData } from '../../models/auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authData:iAuthData = {
    email: '',
    password: ''
  }

  constructor(private authSvc:AuthService,
    private router:Router
  ){}

login(){
  this.authSvc.login(this.authData).subscribe(()=>{
    this.router.navigate(['/home'])
  })
}


}
