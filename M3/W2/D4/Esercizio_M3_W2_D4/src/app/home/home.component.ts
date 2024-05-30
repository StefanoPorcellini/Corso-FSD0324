import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
import { iPhoto } from '../photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

allPhotos:iPhoto[] = []

likeCounter:number=0

constructor( private photoSvc: PhotoService){}

ngOnInit(){
this.photoSvc.getPhotos().subscribe(data => this.allPhotos = data)
console.log('allPhotos= ', this.allPhotos);

  }

}
