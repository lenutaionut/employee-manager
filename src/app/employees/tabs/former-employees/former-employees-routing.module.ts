import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormerEmployeesComponent } from './former-employees.component';

const routes: Routes = [{ path: '', component: FormerEmployeesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormerEmployeesRoutingModule { }
