import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/employees/constants/employee';
import { ROLE, TYPE, STATUS } from '../../constants/columns';

@Component({
  selector: 'app-new-hires',
  templateUrl: './new-hires.component.html',
  styleUrls: ['./new-hires.component.scss']
})
export class NewHiresComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData = [
    {
      col_firstname: "Popescu",
      col_lastname: 'Ionut',
      col_address: 'Brasov',
      col_role: ROLE.QA,
      col_department: 'development',
      col_type: TYPE.PERMANENT,
      col_status: STATUS.TERMINATED,
      col_probation: 'start-end'
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
    { header: 'Probation', columnDef: 'col_probation' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];
  }

}
