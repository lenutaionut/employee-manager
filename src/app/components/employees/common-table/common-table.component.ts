import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesTableColumns } from 'src/app/components/constants/columns';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  columns = EmployeesTableColumns;
  displayedColumns = this.columns.map((c) => c.columnDef)
  dataSource = new MatTableDataSource<any>([]);

  tableData = [
    { col_firstname: "Test", col_lastname: 'Ionut' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData)
  }

}
