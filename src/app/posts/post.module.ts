import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent,
    PostFormComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'posts', component: PostsListComponent, pathMatch: 'full'},
      {path: 'posts/new', component: PostFormComponent, pathMatch: 'full'},
      {path: 'posts/:postId', component: PostComponent, pathMatch: 'full'},
      {path: 'posts/edit/:postId', component: PostFormComponent,pathMatch: 'full'},
      {path: 'posts/delete/:postId', component: PostsListComponent, pathMatch: 'full'},
      
      
    ]),
    SharedModule
  ]
})
export class PostModule { }
