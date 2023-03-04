import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData: ITableData[] = [];

  newColumns = [
    { header: 'Mentor', columnDef: 'col_mentor' },
    { header: 'Start Date - End Date', columnDef: 'col_startEndDate' },
    { header: 'Review From Mentor', columnDef: 'col_review' },
  ];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];

    this.tableData = this.employeesService.getAllEmployees()
  }

}
