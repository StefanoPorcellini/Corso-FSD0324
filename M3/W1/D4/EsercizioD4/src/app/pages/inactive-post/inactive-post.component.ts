import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  postsArr:iPost[] = []
  inactivePost:iPost[] = []

  ngOnInit(){
  this.getPost()
    console.log('post attivi', this.inactivePost);

  }

async getPost(){
    const response = await fetch("../../../assets/db.json")
    const posts= <iDataBase> await response.json()

    this.postsArr = posts.posts
    this.inactivePost = this.postsArr.filter(post=>post.active === false)

  }


}
