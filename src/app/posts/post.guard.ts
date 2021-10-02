import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from './ipost';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostGuard implements CanActivate {


  private post!:IPost;

  constructor(private router: Router,
              private postService: PostService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const postId = Number(route.paramMap.get('postId'));
    
    if(isNaN(postId)){
      alert('Invalid post id')
      this.router.navigate(['/posts']);
      return false;
    }
    return true;
  }

}
