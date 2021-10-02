import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map,  tap } from 'rxjs/operators'

import { IPost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:8888'

  constructor(private http: HttpClient) {}

  getPostsFromServer(path:string):Observable<IPost[]>{
    return this.http.get<IPost[]>(this.url+"/"+path).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPost(postId: number){
    return this.http.get<IPost>(this.url+"/posts/"+postId).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(postId:number){
    const newUrl = this.url+"/posts/delete/";
    this.http.delete(newUrl+String(postId))
     .subscribe(() => console.log("Delete successful"));

  }

  private handleError(err: HttpErrorResponse){
    console.log(err.error.message);
    return throwError(err.error.message);
  }
}
