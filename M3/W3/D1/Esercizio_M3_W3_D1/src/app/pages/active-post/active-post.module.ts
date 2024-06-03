import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivePostRoutingModule } from './active-post-routing.module';
import { ActivePostComponent } from './active-post.component';


@NgModule({
  declarations: [
    ActivePostComponent
  ],
  imports: [
    CommonModule,
    ActivePostRoutingModule
  ]
})
export class ActivePostModule { }
