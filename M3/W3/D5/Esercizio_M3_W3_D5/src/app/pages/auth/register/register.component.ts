import { Component } from '@angular/core';
import { iUser } from '../../../models/user';
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
    private router:Router,
    private formsSvc:FormsService,

  ){}

  ngOnInit(){
    this.form = this.formsSvc.getForm()
  }

  submitForm(){
    this.formsSvc.submitForm()
  }

  back(){
    this.router.navigate(['/login'])
  }

}
