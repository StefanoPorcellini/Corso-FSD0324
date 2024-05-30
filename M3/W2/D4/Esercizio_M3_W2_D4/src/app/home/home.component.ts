import { Component, ViewChild, viewChild } from '@angular/core';
import { PhotoService } from '../photo.service';
import { iPhoto } from '../photo';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

allPhotos:iPhoto[] = []

@ViewChild('photoCard') photoCard!:CardComponent

likeCounter:number=0

constructor( private photoSvc: PhotoService){}

ngOnInit(){
this.photoSvc.getPhotos().subscribe(data => this.allPhotos = data)
console.log('allPhotos= ', this.allPhotos);

  }

disableLike:boolean = false

  getLikeBtn(id:number){
    this.photoSvc.getLike(id)
  this.likeCounter = this.photoSvc.likeCounterLength
    this.disableLike=!this.disableLike
}


}
