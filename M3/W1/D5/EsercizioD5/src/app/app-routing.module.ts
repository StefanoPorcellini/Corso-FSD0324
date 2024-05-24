import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { Page404Component } from './Pages/page404/page404.component';
import { FiatComponent } from './Pages/fiat/fiat.component';
import { FordComponent } from './Pages/ford/ford.component';
import { AudiComponent } from './Pages/audi/audi.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'fiat',
    component:FiatComponent,
    title:'Fiat'
  },
  {
    path:'ford',
    component:FordComponent,
    title:'Ford'
  },
  {
    path:'audi',
    component:AudiComponent,
    title:'Audi'
  },
  {
    path:'**',
    component:Page404Component,
    title:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
