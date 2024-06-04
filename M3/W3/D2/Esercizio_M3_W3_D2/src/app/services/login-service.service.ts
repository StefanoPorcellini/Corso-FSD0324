import { Injectable, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private fb:FormBuilder,
    private router:Router
  ) { }

  form!:FormGroup

  user:string = ''
  password:string = ''

login(){ if(this.form.get('user')?.value || this.form.get('password')?.value){
  Swal.fire({
    icon: 'error',
    title: 'Attenzione, user o password errati o inesistenti!',
  })
} else
  if(  this.form.get('user')?.value === this.user
  && this.form.get('password')?.value === this.password  )
  {
    Swal.fire({
      icon: 'success',
      title: 'Login effettuato con successo',
    })
    this.router.navigate(['/welcome'])
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Attenzione, user o password errati o inesistenti!',
    })
  }
}


getForm(){
  this.form = this.fb.group({
    nome: this.fb.control(null, [Validators.required]),
    cognome: this.fb.control(null, [Validators.required]),
    authData: this.fb.group({
      email: this.fb.control(null, [
        Validators.required,
        Validators.email
        ]
      ),
      user: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required),
      confPassword: this.fb.control(null, Validators.required),
      }),
      genere: this.fb.control(null, Validators.required),
      imgProfilo: this.fb.control(null),
      bio: this.fb.control(null)
  })
  return this.form
}

inviaReg(){
  console.log('form completo =', this.form,
              'form.value = ',  this.form.value,
              'nome= ', this.form.get('nome')?.value);
  if(this.form.valid){
  Swal.fire({
    icon: 'success',
    title: 'Registrazione completata con successo',
  })
  this.form.reset()
  this.router.navigate(['/'])

} else {
    Swal.fire({
      icon: 'error',
      title: 'Attenzione, inserisci i dati richiesti!',
    })
  }
}

}
