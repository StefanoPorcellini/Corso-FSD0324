import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  },
  {
    path:'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
