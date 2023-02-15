import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewHiresRoutingModule } from './new-hires-routing.module';
import { NewHiresComponent } from './new-hires.component';


@NgModule({
  declarations: [
    NewHiresComponent
  ],
  imports: [
    CommonModule,
    NewHiresRoutingModule
  ]
})
export class NewHiresModule { }
