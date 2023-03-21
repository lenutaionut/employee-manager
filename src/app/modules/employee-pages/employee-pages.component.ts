import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as moment from 'moment';
import { IMatTabs } from 'src/app/model/tabs';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeePagesService } from './employee-pages.service';

@Component({
  selector: 'app-employee-pages',
  templateUrl: './employee-pages.component.html',
  styleUrls: ['./employee-pages.component.scss'],
  providers: [EmployeesService, EmployeePagesService]
})
export class EmployeePagesComponent implements OnInit {

  selectedTabIndex: number = 1;
  tabs: IMatTabs[] = [];

  private localStorageKey = 'activeIndex';

  constructor(private employeePageService: EmployeePagesService) { }

  ngOnInit(): void {
    const activeIndex = localStorage.getItem(this.localStorageKey) || '1';
    this.selectedTabIndex = +activeIndex;

    this.employeePageService.initTableData();
    this.tabs = this.employeePageService.getTabsData();
  }

  onTabChange(event: MatTabChangeEvent) {
    localStorage.setItem(this.localStorageKey, event.index.toString());
  }
}
