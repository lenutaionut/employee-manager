import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  tabs: any[] = [] ;

  constructor() {
    this.tabs = [
      { title: 'New Hires', path: 'new-hires' },
      { title: 'All employees', path: 'all' },
      { title: 'Contractor', path: 'contractor' },
      { title: 'Permanent Employees', path: 'permanent' },
      { title: 'Employees Close To Retirement', path: 'retirement' },
      { title: 'Former Employees', path: 'former' },
      { title: 'Internship', path: 'internship' }
    ]
  }

  ngOnInit(): void {
  }

}
