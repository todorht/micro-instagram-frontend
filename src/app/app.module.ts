import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostModule } from './posts/post.module';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { Error404Component } from './components/errors/404.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full"},
  { path: '**',  redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostModule,
    UserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
