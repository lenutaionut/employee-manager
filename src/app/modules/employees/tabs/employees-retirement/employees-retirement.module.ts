import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRetirementRoutingModule } from './employees-retirement-routing.module';
import { EmployeesRetirementComponent } from './employees-retirement.component';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';


@NgModule({
  declarations: [
    EmployeesRetirementComponent
  ],
  imports: [
    CommonModule,
    EmployeesRetirementRoutingModule,
    CommonTableModule
  ]
})
export class EmployeesRetirementModule { }
