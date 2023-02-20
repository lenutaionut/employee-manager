import { Component, OnInit } from '@angular/core';
import { ROLE, TYPE, STATUS } from '../../constants/columns';
import { EmployeesTableColumns } from '../../constants/employee';

@Component({
  selector: 'app-permanent-employees',
  templateUrl: './permanent-employees.component.html',
  styleUrls: ['./permanent-employees.component.scss']
})
export class PermanentEmployeesComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData = [
    {
      col_firstname: "Popescu",
      col_lastname: 'Ionut',
      col_address: 'Brasov',
      col_role: ROLE.QA,
      col_department: 'development',
      col_type: TYPE.PERMANENT,
      col_status: STATUS.TERMINATED
    },
    {
      col_firstname: "Lenuta",
      col_lastname: 'Ionut',
      col_address: 'BN',
      col_role: ROLE.DEV,
      col_department: 'testing',
      col_type: TYPE.CONTRACTOR,
      col_status: STATUS.VACATION
    }
  ];

  newColumns = [
    { header: 'Supervisor', columnDef: 'col_supervisor' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];
  }

}
