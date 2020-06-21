import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private formebuilder:FormBuilder,private postService:PostService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
   this.formGroup = this.formebuilder.group({
     title:['',Validators.required],
     content:['',Validators.required],
   });
  }
  saveForm(){
   const titre = this.formGroup.get('title').value;
   const contenu = this.formGroup.get('content').value;
   const date = new Date();
   const like = 0;
   let book= {title:titre,
  content:contenu,
  loveIts:like,
  created_at:date};
  this.postService.ajoutPost(book);
  this.router.navigate(['/post']);
  }

}
