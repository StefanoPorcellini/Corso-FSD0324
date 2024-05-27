import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';
import { AllPostService } from '../../Services/all-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost[] = []
  firstPost!:iPost;
  randomPosts:iPost[] = []

  constructor(
    private postSvc:AllPostService
  ){}


  ngOnInit(){

    this.postsArr = this.postSvc.allPost


      let firstPost = this.getFirstPost()

      if(firstPost){
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()


  }


  getFirstPost(){
    return this.postsArr.shift()
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);}


}
