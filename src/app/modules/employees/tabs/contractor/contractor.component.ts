import { Component, OnInit } from '@angular/core';
import { EmployeesTableColumns } from 'src/app/model/employee';
import { ITableData, TYPE } from 'src/app/model/table';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {

  columns = EmployeesTableColumns;

  tableData: ITableData[] = [];

  newColumns = [
    { header: 'Company Name', columnDef: 'col_companyName' },
    { header: 'Contract', columnDef: 'col_contract' }
  ];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.columns = [...this.columns, ...this.newColumns];

    this.tableData = this.employeesService.getAllEmployees()
    .filter(employee => 
      this.employeesService.formatType(employee.col_type) === TYPE.CONTRACTOR);

  }

}
