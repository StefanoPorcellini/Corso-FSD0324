import { Component, Input } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { AllPostService } from '../../Services/all-post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() post!:iPost

  status:boolean = false

    changeStatus(){
    this.status = !this.status
  }

}
