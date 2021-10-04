import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostGuard } from './post.guard';
import { UserGuard } from '../user/user.guard';
import { ImageComponent } from './post-form/image.component';
import { SafeImageUrlPipe } from './safe-image-url.pipe';
import { DeleteDialogComponent } from './post/delete-dialog.component';

const routes: Routes = [
  { path: 'posts', canActivate: [UserGuard], component: PostsListComponent, pathMatch: 'full' },
  { path: 'posts/new', canActivate: [UserGuard], component: PostFormComponent, pathMatch: 'full' },
  { path: 'posts/:postId', canActivate: [UserGuard, PostGuard], component: PostComponent, pathMatch: 'full' },
  { path: 'posts/edit/:postId', canActivate: [UserGuard, PostGuard], component: PostFormComponent, pathMatch: 'full' },
  { path: 'posts/delete/:postId', canActivate: [UserGuard, PostGuard], component: PostsListComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent,
    PostFormComponent,
    ImageComponent,
    SafeImageUrlPipe,
    DeleteDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [SharedModule]
})
export class PostModule { }
