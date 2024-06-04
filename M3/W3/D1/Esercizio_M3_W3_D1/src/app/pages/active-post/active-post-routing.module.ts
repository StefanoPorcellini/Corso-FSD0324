import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './active-post.component';

const routes: Routes = [
  {
  path:'',
  component: ActivePostComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivePostRoutingModule { }
