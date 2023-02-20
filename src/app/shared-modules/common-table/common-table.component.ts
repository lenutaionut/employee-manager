import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITableColumns, ITableData} from '../../employees/constants/columns';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input()
  columns?: ITableColumns[];

  @Input()
  tableData?: ITableData[];

  dataSource = new MatTableDataSource<ITableData>([]);
  displayedColumns?: string[];

  constructor() { }

  ngOnInit(): void {
  
    this.displayedColumns = this.columns?.map((col: ITableColumns) => col.columnDef)
    this.dataSource = new MatTableDataSource(this.tableData)
  }

}
