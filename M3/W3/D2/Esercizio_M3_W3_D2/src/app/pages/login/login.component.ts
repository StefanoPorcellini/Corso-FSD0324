import { Component } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loginSvc:LoginServiceService){}

  login(){this.loginSvc.login()}

}
