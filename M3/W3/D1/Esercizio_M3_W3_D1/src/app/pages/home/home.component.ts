import { Component, ViewChild } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { AllPostService } from '../../Services/all-post.service';
import { SinglePostComponent } from '../../shared/single-post/single-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postsArr: iPost[] = this.postSvc.allPost
  firstPost!: iPost
  randomPosts: iPost[] = []
  tags:string[] = []
  selectedTag!:string
  filteredTag!:string

  @ViewChild('singlePost') singlePost!: SinglePostComponent;

  constructor(private postSvc: AllPostService) {

    this.tags=this.postSvc.getAllTags(this.postsArr)

  }

  ngOnInit() {
    let firstPost = this.postSvc.getFirstPost();

    if (firstPost) {
      this.firstPost = firstPost;
    }

    this.randomPosts = this.postSvc.getRandomPosts();

  }

  saveForm() {
    alert('Titolo salvato');
  }

  filterTag(tag:string){
    this.filteredTag = tag
    this.postsArr = this.postSvc.getTagForFilter(this.filteredTag)
  }

}
