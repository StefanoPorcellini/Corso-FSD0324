import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../Models/i-post';
import { iDataBase } from '../../Models/i-data-base';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {

  postsArr:iPost[] = []

  currentPost!:iPost


  constructor(
    private route:ActivatedRoute,
  ){}

  ngOnInit(){

    this.getPost()



  }



  async getPost(){
    const response = await fetch("../../../assets/db.json")
    const posts= <iDataBase> await response.json()

    this.postsArr = posts.posts

    this.route.params.subscribe((params:any) => {

      console.log('param=', params);


      let findPost = this.postsArr.find(p => p.id == params.id)

      if(findPost)this.currentPost = findPost

      console.log('post selezionato', this.currentPost);


    })
  }


}
