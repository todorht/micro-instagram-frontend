import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostModule } from './posts/post.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full'},
     { path: '**', redirectTo: 'posts', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
