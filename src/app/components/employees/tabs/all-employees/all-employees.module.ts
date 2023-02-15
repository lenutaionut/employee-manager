import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllEmployeesRoutingModule } from './all-employees-routing.module';
import { AllEmployeesComponent } from './all-employees.component';
import { CommonTableComponent } from '../../common-table/common-table.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [
    AllEmployeesComponent,
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    AllEmployeesRoutingModule,
    MaterialModule
  ]
})
export class AllEmployeesModule { }
