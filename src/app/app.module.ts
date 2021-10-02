import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostModule } from './posts/post.module';
import { HttpClientModule } from '@angular/common/http';

import { LogInComponent } from './components/log-in/log-in.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Error404Component } from './components/errors/404.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: "full"},
  { path: 'login', component: LogInComponent },
  { path: '404', component: Error404Component},
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ToolbarComponent,
    SidenavComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
