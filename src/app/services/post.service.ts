import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts=[{
    title:"Mon premier post",
    content:"Lorem impsum dolor sit amet, consctetur adipsing",
    loveIts:0,
    created_at: new Date()
  },
{
  title:"Mon deuxieme post",
  content:"Lorem ipsum dolor sit amet, consectetur adipscing elt",
  loveIts:0,
  created_at:new Date()
},
{
  title:"Encore un post",
  content:"Loreme ipsum dolor sit amet consectetur",
  loveIts:0,
  created_at: new Date()
}];
postSubject = new Subject<any[]>();
emitPost(){
  this.postSubject.next(this.posts);
}
ajoutPost(post:any){
  this.posts.push(post);
  this.emitPost();
}
supprimerPost(id){
  this.posts.splice(id,1);
}
positifPost(id){
  this.posts[id].loveIts++;
}
negatifPost(id){
  this.posts[id].loveIts--;
}

  constructor() { }
}
