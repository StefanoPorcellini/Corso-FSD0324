import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.scss'
})
export class RegistrateComponent {

  form!:FormGroup

  constructor(private fb:FormBuilder,
    private loginSvc:LoginServiceService){}

  ngOnInit(){

    this.form = this.loginSvc.getForm()
  }

invia(){
  this.loginSvc.inviaReg()
}

}
