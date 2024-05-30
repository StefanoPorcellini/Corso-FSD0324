import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { iPhoto } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

   apiUrl:string = 'https://jsonplaceholder.typicode.com/photos';


  constructor(private http:HttpClient) { }

  getPhotos():Observable<iPhoto[]>{
    return this.http.get<iPhoto[]>(this.apiUrl).pipe(catchError(error => {
      return throwError((()=> new Error('ERRORE')))
    }))
  }

  getLike(){}
}
