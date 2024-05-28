import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';
import { AllPostService } from '../../Services/all-post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

inactivePost!:iPost[]

  constructor(private postSvc: AllPostService) {
    this.inactivePost = this.postSvc.PostInactive()
  }



}
