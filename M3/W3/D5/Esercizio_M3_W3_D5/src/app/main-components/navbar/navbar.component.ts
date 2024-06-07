import { Component, TemplateRef, inject } from '@angular/core';
import { AuthService } from '../../pages/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private authSvc:AuthService){}

logout(){
  this.authSvc.logout()
}

}
