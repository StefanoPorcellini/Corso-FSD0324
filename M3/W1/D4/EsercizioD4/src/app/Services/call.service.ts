import { Injectable } from '@angular/core';
import { iPost } from '../Models/i-post';
import { iDataBase } from '../Models/i-data-base';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  postsArr:iPost[] = []
  firstPost!:iPost;
  randomPosts:iPost[] = []

  constructor() { }

  async getPost(){
    const response = await fetch("../../../assets/db.json")
    const posts= <iDataBase> await response.json()
    this.postsArr = posts.posts
    return this.postsArr
  }

  getAllPost():iPost[]{
    return this.postsArr
  }

  getFirstPost(){
    return this.postsArr.shift()
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);}

  callPost(){

    this.getPost().then(()=>{

      let firstPost = this.getFirstPost()

      if(firstPost){
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()

    })

  }

}
