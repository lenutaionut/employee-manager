import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewHiresRoutingModule } from './new-hires-routing.module';
import { NewHiresComponent } from './new-hires.component';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';


@NgModule({
  declarations: [
    NewHiresComponent
  ],
  imports: [
    CommonModule,
    NewHiresRoutingModule,
    CommonTableModule
  ]
})
export class NewHiresModule { }
