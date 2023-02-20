import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllEmployeesRoutingModule } from './all-employees-routing.module';
import { AllEmployeesComponent } from './all-employees.component';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';

@NgModule({
  declarations: [
    AllEmployeesComponent
  ],
  imports: [
    CommonModule,
    AllEmployeesRoutingModule,
    CommonTableModule
  ]
})
export class AllEmployeesModule { }
