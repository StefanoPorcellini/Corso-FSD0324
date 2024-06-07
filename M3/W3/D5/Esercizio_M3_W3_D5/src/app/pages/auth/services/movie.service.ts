import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovie } from '../../../models/movie';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http:HttpClient) { }

    getAll():Observable<iMovie[]>{
      return this.http.get<iMovie[]>(environment.moviesSrv)
    }

    getById(id:number){
      return this.http.get<iMovie>(`${environment.moviesSrv}/${id}`)
    }

    
}
