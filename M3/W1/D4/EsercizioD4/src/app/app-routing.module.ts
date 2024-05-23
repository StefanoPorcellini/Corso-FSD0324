import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { InactivePostComponent } from './pages/inactive-post/inactive-post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { Page404Component } from './pages/page404/page404.component';
const routes: Routes = [

  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'active-post',
    component: ActivePostComponent
  },
  {
    path:'inactive-post',
    component: InactivePostComponent
  },
  {
    path:'post-detail/:id',
    component: PostDetailComponent
  },
  {
    path:'**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
