import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';
import { Routes, RouterModule } from '@angular/router';
import { PostService } from './services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:"posts", component:PostComponent},
  {path:"new", component:NewPostComponent},
  {path:"",redirectTo:"posts",pathMatch:"full"},
  {path:"**",redirectTo: "posts"}
];
@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
