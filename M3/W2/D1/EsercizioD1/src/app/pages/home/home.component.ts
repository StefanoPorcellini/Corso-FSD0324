import { Component, ViewChild } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';
import { AllPostService } from '../../Services/all-post.service';
import { SinglePostComponent } from '../../Components/single-post/single-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost[] = this.postSvc.allPost
  firstPost!:iPost;
  randomPosts:iPost[] = []

  constructor(
    private postSvc:AllPostService
  ){}




  ngOnInit(){



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
