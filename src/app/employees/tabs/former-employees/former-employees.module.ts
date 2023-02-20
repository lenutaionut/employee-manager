import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormerEmployeesRoutingModule } from './former-employees-routing.module';
import { FormerEmployeesComponent } from './former-employees.component';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';


@NgModule({
  declarations: [
    FormerEmployeesComponent
  ],
  imports: [
    CommonModule,
    FormerEmployeesRoutingModule,
    CommonTableModule
  ]
})
export class FormerEmployeesModule { }
