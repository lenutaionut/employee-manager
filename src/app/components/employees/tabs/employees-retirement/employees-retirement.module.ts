import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRetirementRoutingModule } from './employees-retirement-routing.module';
import { EmployeesRetirementComponent } from './employees-retirement.component';


@NgModule({
  declarations: [
    EmployeesRetirementComponent
  ],
  imports: [
    CommonModule,
    EmployeesRetirementRoutingModule
  ]
})
export class EmployeesRetirementModule { }
