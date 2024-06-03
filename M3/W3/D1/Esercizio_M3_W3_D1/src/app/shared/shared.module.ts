import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from './Directives/random-color.directive';



@NgModule({
  declarations: [
    SinglePostComponent,
    RandomColorDirective

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SinglePostComponent,
    RandomColorDirective
  ]
})
export class SharedModule { }
