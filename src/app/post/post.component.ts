import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts:any[];
  postSubscription:Subscription;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts:any[])=>{
        this.posts=posts;
      }
    );
    this.postService.emitPost();
  }
  deletePost(id){
    this.postService.supprimerPost(+id);
    this.postService.emitPost();
  }
  positif(id){
    this.postService.positifPost(+id);
  }
  negatif(id){
    this.postService.negatifPost(+id);
  }
}
