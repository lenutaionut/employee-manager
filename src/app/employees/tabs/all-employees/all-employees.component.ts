import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/employees/constants/employee';
import { ROLE, STATUS, TYPE } from 'src/app/employees/constants/columns'

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData = [
    {
      col_firstname: "Test",
      col_lastname: 'Ionut',
      col_address: 'Sangeorz-Bai',
      col_role: ROLE.PM,
      col_department: 'development',
      col_type: TYPE.CONTRACTOR,
      col_status: STATUS.ACTIVE
    },
    {
      col_firstname: "Lenuta",
      col_lastname: 'Ionut',
      col_address: 'BN',
      col_role: ROLE.DEV,
      col_department: 'testing',
      col_type: TYPE.CONTRACTOR,
      col_status: STATUS.TERMINATED
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
