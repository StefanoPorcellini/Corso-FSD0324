import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  show:boolean = false;

  checkLogin:boolean = false

  constructor(private authSvc:AuthService){}

  ngOnInit(){


  }

  login(){
    this.authSvc.login()
  }


  logout(){}

}
