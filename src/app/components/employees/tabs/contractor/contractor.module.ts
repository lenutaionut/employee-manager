import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorRoutingModule } from './contractor-routing.module';
import { ContractorComponent } from './contractor.component';


@NgModule({
  declarations: [
    ContractorComponent
  ],
  imports: [
    CommonModule,
    ContractorRoutingModule
  ]
})
export class ContractorModule { }
