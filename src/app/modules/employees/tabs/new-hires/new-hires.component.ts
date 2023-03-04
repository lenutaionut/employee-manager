import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-new-hires',
  templateUrl: './new-hires.component.html',
  styleUrls: ['./new-hires.component.scss']
})
export class NewHiresComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData: ITableData[] = [];

  newColumns = [
    { header: 'Probation', columnDef: 'col_probation' }
  ];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];

    this.tableData = this.employeesService.getAllEmployees()
      .filter((employee) => {
        const startDate = moment().subtract(2, 'months');
        const currentDate = moment();
        return moment(employee.col_firstJoined, 'DD.MM.yyyy').isBetween(startDate, currentDate);
      });
  }

}
