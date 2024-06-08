import { iAuthResponse } from './../../models/auth-response';
import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../pages/auth/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsService } from '../../pages/auth/services/forms.service';
import { iUser } from '../../models/user';
import { FormGroup } from '@angular/forms';
import { MovieService } from '../../pages/auth/services/movie.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private authSvc:AuthService,
    private formsSvc:FormsService
    ){}

  private modalService = inject(NgbModal);

  openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

  newUser:iAuthResponse|null = this.authSvc.getAccessData();

  loggedUser:Partial<iUser>= this.authSvc.getAccessData()?.user as Partial<iUser>

  ngOnInit(){
    console.log(this.authSvc.getAccessData()?.user);

    // this.loggedUser=localStorage.getItem('accessData')
  }

logout(){
  this.authSvc.logout()
}

}
