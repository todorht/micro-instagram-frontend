import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map,  tap } from 'rxjs/operators'

import { Post } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:8888'

  constructor(private http: HttpClient) {}

  getPostsFromServer(path:string):Observable<Post[]>{
    return this.http.get<Post[]>(this.url+"/"+path).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPost(postId: number){
    return this.http.get<Post>(this.url+"/posts/"+postId).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(postId:number){
    const newUrl = this.url+"/posts/delete/";
    this.http.delete(newUrl+String(postId))
     .subscribe(() => console.log("Post was deleted"));

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  savePost(post:Post): Observable<Post>{
    console.log(post);
    return this.http.post<Post>(this.url+"/posts/new", post, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.error.message);
    return throwError(err.error.message);
  }
}
