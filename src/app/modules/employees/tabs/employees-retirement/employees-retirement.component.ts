import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-retirement',
  templateUrl: './employees-retirement.component.html',
  styleUrls: ['./employees-retirement.component.scss']
})
export class EmployeesRetirementComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData: ITableData[] = [];

  newColumns = [
    { header: 'Countdown', columnDef: 'col_countdown' }
  ];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];

    this.tableData = this.employeesService.getAllEmployees();
  }

}
