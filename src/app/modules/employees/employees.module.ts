import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeesService } from 'src/app/services/employees.service';
import { MaterialModule } from 'src/app/shared-modules/material.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
