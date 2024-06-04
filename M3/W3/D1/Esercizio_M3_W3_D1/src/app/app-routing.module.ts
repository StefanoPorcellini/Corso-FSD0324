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
    loadChildren:()=> import('./pages/home/home-routing.module').then(m=>m.HomeRoutingModule)  },
  {
    path:'active-post',
    loadChildren:()=> import('./pages/active-post/active-post-routing.module').then(m=>m.ActivePostRoutingModule)  },

  {
    path:'inactive-post',
    loadChildren:()=> import('./pages/inactive-post/inactive-post-routing.module').then(m=>m.InactivePostRoutingModule)  },
  {
    path:'post-detail/:id',
    loadChildren:()=> import('./pages/post-detail/post-detail-routing.module').then(m=>m.PostDetailRoutingModule)  },

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {
    path:'**',
    loadChildren:()=> import('./pages/page404/page404-routing.module').then(m=>m.Page404RoutingModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
