import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermanentEmployeesComponent } from './permanent-employees.component';

const routes: Routes = [{ path: '', component: PermanentEmployeesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermanentEmployeesRoutingModule { }
