import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostModule } from './posts/post.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'posts', pathMatch: 'full'},
      { path: 'login', component: LogInComponent}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
