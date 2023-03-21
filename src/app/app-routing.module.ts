import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EmployeePagesComponent } from './modules/employee-pages/employee-pages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees-pages',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'employees-pages',
    component: EmployeePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
