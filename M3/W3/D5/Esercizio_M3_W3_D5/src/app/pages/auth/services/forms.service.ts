import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iUser } from '../../../models/user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { iAuthData } from '../../../models/auth-data';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  form!: FormGroup;

  userForm!: FormGroup;

  newUser: Partial<iUser> = {
    email: '',
    password: '',
  };

  loggedUser: iAuthData = {
    email: '',
    password: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSvc: AuthService
  ) {}

  getForm(): FormGroup {
    this.form = this.fb.group({
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required),
      confPassword: this.fb.control(null, Validators.required),
    });
    return this.form;
  }

  getUserLogin(): FormGroup {
    this.userForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required),
    });
    return this.userForm;
  }

  createNew(user: iAuthData | Partial<iUser>, formData: FormGroup) {
    user.email = formData.value.email;
    user.password = formData.value.password;
  }

  submitForm():void {
    if (this.form.value.password !== this.form.value.confPassword) {
      Swal.fire({
        title: 'Password e Conferma Password non coincidono!',
        text: 'Controlla i dati',
        icon: 'error',
      });
    } else {
      if (
        this.form.value.password === this.form.value.confPassword &&
        this.form.invalid
      ) {
        Swal.fire({
          title: 'Attenzione! Dati Mancanti',
          text: 'Controlla i dati',
          icon: 'warning',
        });
      } else {
        this.createNew(this.newUser, this.form);
        this.authSvc.register(this.newUser).subscribe(() => {
          Swal.fire({
            title: 'Registrazione completata con successo!',
            text: 'Ora puoi effettuare il login',
            icon: 'success',
          });
          this.router.navigate(['/login']);
        });
      }
    }
  }

  login():void{
    if(this.userForm.invalid){
      Swal.fire({
        title: 'Attenzione! Email o Password Errati',
        text: 'Controlla i dati o registrati se non sei registrato',
        icon: 'warning',
      });
    } else {
      this.createNew(this.loggedUser, this.userForm)
      this.authSvc.login(this.loggedUser).subscribe(()=>{
        Swal.fire({
          title: 'Login effettuato con successo!',
          icon: 'success',
        });
        this.router.navigate(['/movie']);
      })
    }
  }

}
