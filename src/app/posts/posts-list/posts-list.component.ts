import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Post } from '../ipost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    console.log("Post list component")
    async () => {
        await delay(1000);
    }
    this.sub = this.postService.getPostsFromServer().subscribe({
      next: posts => this.posts = posts,
      error: err => this.errorMessage = err,
      
    });
  }

}
