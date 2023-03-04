import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITableColumns, ITableData } from '../../model/table';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
