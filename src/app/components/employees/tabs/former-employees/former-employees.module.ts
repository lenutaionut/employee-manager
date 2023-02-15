import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormerEmployeesRoutingModule } from './former-employees-routing.module';
import { FormerEmployeesComponent } from './former-employees.component';


@NgModule({
  declarations: [
    FormerEmployeesComponent
  ],
  imports: [
    CommonModule,
    FormerEmployeesRoutingModule
  ]
})
export class FormerEmployeesModule { }
