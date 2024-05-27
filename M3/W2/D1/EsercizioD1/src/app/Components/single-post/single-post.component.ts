import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { AllPostService } from '../../Services/all-post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  postsArr:iPost[]=[]
  status:boolean = false

  constructor(
    private postSvc:AllPostService
  ){}

  ngOnInit(){

    this.postsArr = this.postSvc.allPost
  }

  changeStatus(){
    this.status = !this.status
  }

}
