import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData, STATUS } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss'], 
 
})
export class AllEmployeesComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData?: ITableData[];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.tableData = this.employeesService.getAllEmployees()
      .filter(employee => this.employeesService.formatStatus(employee.col_status) !== STATUS.TERMINATED);
  }

}
