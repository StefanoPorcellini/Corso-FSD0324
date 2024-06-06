import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iUser } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Data, Router } from '@angular/router';
import { iAuthData } from '../../models/auth-data';
import { iAuthResponse } from '../../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<null|iUser>(null)
  syncLoggedIn:boolean = false

  user$ = this.authSubject.asObservable()

  syncLoggedIn$ = this.user$.pipe(
    map(u=>!!u),
    tap(u => this.syncLoggedIn=u)
)

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

  autoLogout():void{

    const accessData = this.getAccessData()
    if(!accessData) return
    const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date
    const expMs = expDate.getTime() - new Date().getTime()
    setTimeout(this.logout, expMs);

  }

  getAccessData():iAuthResponse | null{
    const accessDataJson = localStorage.getItem('accessData')
    if(!accessDataJson) return null
    const accessData:iAuthResponse = JSON.parse(accessDataJson)
    return accessData
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
    this.router.navigate(['/home'])
  }

  getForm(){

  }
}
