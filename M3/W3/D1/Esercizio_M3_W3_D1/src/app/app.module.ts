import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { InactivePostComponent } from './pages/inactive-post/inactive-post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from './Directives/random-color.directive';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivePostComponent,
    InactivePostComponent,
    PostDetailComponent,
    Page404Component,
    RandomColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
