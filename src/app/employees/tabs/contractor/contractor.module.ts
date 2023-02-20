import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorRoutingModule } from './contractor-routing.module';
import { ContractorComponent } from './contractor.component';
import { MaterialModule } from 'src/app/shared-modules/material.module';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';


@NgModule({
  declarations: [
    ContractorComponent
  ],
  imports: [
    CommonModule,
    ContractorRoutingModule,
    MaterialModule,
    CommonTableModule
  ]
})
export class ContractorModule { }
