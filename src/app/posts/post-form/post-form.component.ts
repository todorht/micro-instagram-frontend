import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from '../ipost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {

  post: IPost = {
    postId: 0,
    username: '',
    base64image: '',
    description: '',
    createAt: new Date(),
  }
  sub!:Subscription;
  errorMessage: string = '';
  newPost: boolean = true;

  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void {
    console.log("Post form component")
    const path =  this.route.snapshot.url;
    if(path.length===3){
      this.newPost = false;
      this.sub = this.postService.getPost(Number(path[2])).subscribe({
        next: post => this.post = post,
        error: err => this.errorMessage = err
      });
    }else{
      this.newPost = true;
    }
    
  }

}
