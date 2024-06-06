import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { iUser } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  loggedUser:Partial<iUser>|undefined =  {}

  constructor(private authSvc:AuthService){}

  ngOnInit(){
    this.loggedUser = this.authSvc.getAccessData()?.user
  }

  logout(){
    this.authSvc.logout()
  }

}
