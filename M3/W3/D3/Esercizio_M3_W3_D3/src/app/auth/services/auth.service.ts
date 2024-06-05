import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { iUser } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthData } from '../../models/auth-data';
import { iAuthResponse } from '../../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<null|iUser>(null)

  user$ = this.authSubject.asObservable()

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  loginUrl:string='http://localhost:3000/login'
  registerUrl:string='http://localhost:3000/register'

  login(authData:iAuthData):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.loginUrl, authData).pipe(tap(data=>{
      this.authSubject.next(data.user)
      localStorage.setItem('accessData', JSON.stringify(data))
    }))
  }

  register(newUser:Partial<iUser>):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.registerUrl, newUser)
    }

  logout():void{
    this.authSubject.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['/'])
  }
}
