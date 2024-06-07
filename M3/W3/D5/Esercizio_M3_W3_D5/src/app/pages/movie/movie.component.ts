import { Component } from '@angular/core';
import { iMovie } from '../../models/movie';
import { MovieService } from '../auth/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

  constructor(private movieSvc:MovieService){}

movies:iMovie[] = []


ngOnInit(){
 this.movieSvc.getAll().subscribe(m=>{
  this.movies = m
 })
}


}
