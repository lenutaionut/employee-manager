import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData, TYPE } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-permanent-employees',
  templateUrl: './permanent-employees.component.html',
  styleUrls: ['./permanent-employees.component.scss']
})
export class PermanentEmployeesComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData: ITableData[] = [];

  newColumns = [
    { header: 'Supervisor', columnDef: 'col_supervisor' }
  ];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];

    this.tableData = this.employeesService.getAllEmployees()
      .filter(employee =>
        this.employeesService.formatType(employee.col_type) === TYPE.PERMANENT);
  }
}
