import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternshipRoutingModule } from './internship-routing.module';
import { InternshipComponent } from './internship.component';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';


@NgModule({
  declarations: [
    InternshipComponent
  ],
  imports: [
    CommonModule,
    InternshipRoutingModule,
    CommonTableModule
  ]
})
export class InternshipModule { }
