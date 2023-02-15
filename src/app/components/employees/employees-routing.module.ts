import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [{
  path: '',
  component: EmployeesComponent,
  children: [
    {
      path: 'new-hires',
      loadChildren: () =>
        import('src/app/components/employees/tabs/new-hires/new-hires.module').then((m) => m.NewHiresModule),
    },
    {
      path: 'all',
      loadChildren: () =>
        import('./tabs/all-employees/all-employees.module').then(m => m.AllEmployeesModule)
    },
    {
      path: 'contractor',
      loadChildren: () =>
        import('./tabs/contractor/contractor.module').then(m => m.ContractorModule)
    },
    {
      path: 'permanent',
      loadChildren: () =>
        import('./tabs/permanent-employees/permanent-employees.module').then(m => m.PermanentEmployeesModule)
    },
    {
      path: 'retirement',
      loadChildren: () =>
        import('./tabs/employees-retirement/employees-retirement.module').then(m => m.EmployeesRetirementModule)
    },
    {
      path: 'former',
      loadChildren: () =>
        import('./tabs/former-employees/former-employees.module').then(m => m.FormerEmployeesModule)
    },
    {
      path: 'internship',
      loadChildren: () =>
        import('./tabs/internship/internship.module').then(m => m.InternshipModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
