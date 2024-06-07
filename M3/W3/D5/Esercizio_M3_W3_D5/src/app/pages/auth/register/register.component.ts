import { Component } from '@angular/core';
import { iUser } from '../../../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsService } from '../services/forms.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  form!:FormGroup

  newUser:Partial<iUser> = {}

  constructor(
    private authSvc:AuthService,
    private router:Router,
    private formsSvc:FormsService
  ){}

  ngOnInit(){
    this.form = this.formsSvc.getForm()
  }

  submitForm(){
    this.formsSvc.submitForm()
  }

}
