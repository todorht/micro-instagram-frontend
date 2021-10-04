import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/user/auth.service';
import { Post } from '../ipost';
import { PostService } from '../post.service';
import { DeleteDialogComponent } from './delete-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post!:Post;
  sub!: Subscription;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    public authService: AuthService,
    private dialog: MatDialog) {}

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
  }

  openDeleteDialog(){
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deletePost(this.post.postId);
      }

    })
  }

  deletePost(postId: number){
      this.postService.deletePost(postId);
      this.cancel();
  }

}
