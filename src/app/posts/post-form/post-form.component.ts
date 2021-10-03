import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/user/auth.service';
import { Post } from '../ipost';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {

  @Input() sendImage:any;

  post: Post = {
    postId: 0,
    username: '',
    base64image: '',
    description: '',
  }
  sub!:Subscription;
  errorMessage: string = '';
  newPost: boolean = true;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router,
              public authService: AuthService) {}

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
    console.log(this.post);
  }

  saveImage(base64image:any){
    this.post.base64image = base64image;
  }

  onSubmit(postForm: any){
    this.post.username = String(this.authService.getCurrentUser());
    this.post.description = postForm.description;
    console.log(this.post);

    this.postService.savePost(this.post).subscribe(()=>{
      console.log("Super stigna");
      this.router.navigate(["/posts"]);
    })
  }

  cancel(){
    this.router.navigate(['/posts']);
  }

}
