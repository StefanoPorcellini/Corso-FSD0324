import { iAuthResponse } from './../../models/auth-response';
import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FormsService } from '../../services/forms.service';
import { iUser } from '../../models/user';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private authSvc:AuthService,
    private movieSvc:MovieService
    ){}

  private modalService = inject(NgbModal);
  private offcanvasService = inject(NgbOffcanvas);


  openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}


  newUser:iAuthResponse|null = this.authSvc.getAccessData();

  loggedUser:Partial<iUser>= this.authSvc.getAccessData()?.user as Partial<iUser>

  allUser!:iUser[]

logout(){
  this.authSvc.logout()
}

ngOnInit(){
  this.movieSvc.getAllUsers().subscribe(u=> this.allUser=u)
}

}
