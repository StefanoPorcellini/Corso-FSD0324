import { Component, input } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { MovieService } from '../../auth/services/movie.service';
import { iMovie } from '../../../models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

constructor(private movieSvc:MovieService) {}

movies:iMovie[] = []



ngOnInit(){
  this.movieSvc.getAll().subscribe(m=>{
    this.movies = m
    })
}

}
