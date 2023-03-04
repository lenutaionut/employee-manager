import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermanentEmployeesRoutingModule } from './permanent-employees-routing.module';
import { PermanentEmployeesComponent } from './permanent-employees.component';
import { CommonTableModule } from 'src/app/shared-modules/common-table/common-table.module';


@NgModule({
  declarations: [
    PermanentEmployeesComponent
  ],
  imports: [
    CommonModule,
    PermanentEmployeesRoutingModule,
    CommonTableModule
  ]
})
export class PermanentEmployeesModule { }
