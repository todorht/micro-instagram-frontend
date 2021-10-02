import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from 'my-logger';
import { Subscription } from 'rxjs';
import { IPost } from '../ipost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post!:IPost;
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private loggerService: LoggerService,
    private router: Router) {}

  cancel(){
    this.router.navigate(['/posts'])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.sub = this.postService.getPost(postId).subscribe({
      next: post => this.post = post,
      error: err => this.errorMessage = err
    })
    this.loggerService.log('User open full post with postId ' + postId)
  }

  deletePost(postId: number){
    this.postService.deletePost(postId);

  }

}
