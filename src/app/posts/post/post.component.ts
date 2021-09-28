import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from '../ipost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  post!:IPost;
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
    private postService: PostService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    console.log("Post component")
    const path = this.route.snapshot.url;
    console.log(path);
    this.sub = this.postService.getPost(Number(path[1])).subscribe({
      next: post => this.post = post,
      error: err => this.errorMessage = err
    })
  }

  deletePost(postId: number){
    this.postService.deletePost(postId);
  }

}
