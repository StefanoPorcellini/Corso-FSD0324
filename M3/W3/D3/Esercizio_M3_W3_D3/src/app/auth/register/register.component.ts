import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { iUser } from '../../models/user';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  form!: FormGroup

  newUser:Partial<iUser> = {}

  constructor( private authSvc:AuthService,
    private router:Router
  ){}

invia(){
  this.authSvc.register(this.newUser).subscribe()
  Swal.fire({
    icon: 'success',
    title: 'Registrazione completata con successo',
  })
  this.router.navigate(['/home'])
}

}
