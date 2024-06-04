import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrateRoutingModule } from './registrate-routing.module';
import { RegistrateComponent } from './registrate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrateComponent
  ],
  imports: [
    CommonModule,
    RegistrateRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistrateModule { }
