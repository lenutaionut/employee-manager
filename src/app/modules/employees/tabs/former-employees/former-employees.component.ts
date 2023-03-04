import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData, STATUS } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-former-employees',
  templateUrl: './former-employees.component.html',
  styleUrls: ['./former-employees.component.scss']
})
export class FormerEmployeesComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData: ITableData[] = [];

  newColumns = [
    { header: 'Leave Date', columnDef: 'col_leaveDate' },
    { header: 'Reason for Leaving', columnDef: 'col_reason' }
  ];
  
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];

    this.tableData = this.employeesService.getAllEmployees()
    .filter(employee => this.employeesService.formatStatus(employee.col_status) === STATUS.TERMINATED);
  }

}
