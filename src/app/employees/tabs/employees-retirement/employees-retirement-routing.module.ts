import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesRetirementComponent } from './employees-retirement.component';

const routes: Routes = [{ path: '', component: EmployeesRetirementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRetirementRoutingModule { }
