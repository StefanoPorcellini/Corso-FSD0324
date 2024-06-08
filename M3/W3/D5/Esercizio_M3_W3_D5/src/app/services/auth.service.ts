import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../models/user';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iAuthResponse } from '../models/auth-response';
import { iAuthData } from '../models/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<null | iUser>(null)

  user$=this.authSubject.asObservable()
  syncIsLoggedIn:boolean = false

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = user))

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  register(newUser:Partial<iUser>):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(environment.registerSrv, newUser)
    .pipe(tap((res => console.log(res)
    )))
  }

  login(authData:iAuthData):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(environment.loginSrv, authData)
    .pipe(tap(d=>{this.authSubject.next(d.user)
      localStorage.setItem('accessData', JSON.stringify(d))
      this.autoLogout()
    }))

  }
  getAccessData():iAuthResponse|null {
    const accessDataJson = localStorage.getItem('accessData')
    if(!accessDataJson) return null
    const accessData:iAuthResponse = JSON.parse(accessDataJson)
    return accessData
  }

  logout():void{
    this.authSubject.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['/auth/login'])
  }

  autoLogout():void{
    const accessData = this.getAccessData()
    if(!accessData) return
    const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date
    const expMs = expDate.getTime() - new Date().getTime()
    setTimeout(this.logout, expMs)
  }

  restoreUser():void{
    const accessData = this.getAccessData()
    if(!accessData) return
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return
    this.authSubject.next(accessData.user)
    this.autoLogout()
  }

  autoLogin(){
    const accessData = this.getAccessData()
    if(!accessData) return
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return
    this.authSubject.next(accessData.user)
    this.autoLogout()
    this.router.navigate(['/movie'])
  }
}
