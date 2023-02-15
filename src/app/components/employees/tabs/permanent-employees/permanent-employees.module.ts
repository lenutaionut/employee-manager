import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermanentEmployeesRoutingModule } from './permanent-employees-routing.module';
import { PermanentEmployeesComponent } from './permanent-employees.component';


@NgModule({
  declarations: [
    PermanentEmployeesComponent
  ],
  imports: [
    CommonModule,
    PermanentEmployeesRoutingModule
  ]
})
export class PermanentEmployeesModule { }
