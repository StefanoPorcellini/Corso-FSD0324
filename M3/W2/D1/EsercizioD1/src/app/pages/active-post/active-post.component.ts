import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {

  postsArr:iPost[] = []
  activePost:iPost[] = []

  ngOnInit(){
  this.getPost()
    console.log('post attivi', this.activePost);

  }

async getPost(){
    const response = await fetch("../../../assets/db.json")
    const posts= <iDataBase> await response.json()

    this.postsArr = posts.posts
    this.activePost = this.postsArr.filter(post=>post.active)

  }

}
