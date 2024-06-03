import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';
import { AllPostService } from '../../Services/all-post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {

  activePost!:iPost[]

  constructor(private postSvc: AllPostService) {
    this.activePost=this.postSvc.activePost()
  }
}
