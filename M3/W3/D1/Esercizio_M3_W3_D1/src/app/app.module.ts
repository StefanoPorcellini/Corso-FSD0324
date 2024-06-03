import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from './Directives/random-color.directive';
import { HomeModule } from './pages/home/home.module';
import { ActivePostModule } from './pages/active-post/active-post.module';
import { InactivePostModule } from './pages/inactive-post/inactive-post.module';
import { Page404Module } from './pages/page404/page404.module';
import { PostDetailModule } from './pages/post-detail/post-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RandomColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    ActivePostModule,
    InactivePostModule,
    Page404Module,
    PostDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
