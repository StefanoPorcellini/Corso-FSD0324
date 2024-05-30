import { Component, Input } from '@angular/core';
import { iPhoto } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

@Input() photo!:iPhoto
}
