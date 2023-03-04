import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as moment from 'moment';
import { EmployeesService } from '../../services/employees.service';
import { EmployeesTableColumns } from '../../model/employee';
import { ITableColumns, ITableData, STATUS, TYPE } from '../../model/table';

@Component({
  selector: 'app-employee-pages',
  templateUrl: './employee-pages.component.html',
  styleUrls: ['./employee-pages.component.scss'],
  providers: [EmployeesService]
})
export class EmployeePagesComponent implements OnInit {

  allEmployeesColumns = EmployeesTableColumns;
  newHiresColumns: ITableColumns[] = [];
  contractorColumns: ITableColumns[] = [];
  permanentEmployeesColumns: ITableColumns[] = [];
  closeToRetirementColumns: ITableColumns[] = [];
  formerEmployeesColumns: ITableColumns[] = [];
  internshipColumns: ITableColumns[] = [];

  newHiresData: ITableData[] = [];
  allEmployeesData: ITableData[] = [];
  contractorData: ITableData[] = [];
  permanentEmployeesData: ITableData[] = [];
  closeToRetirementData: ITableData[] = [];
  formerEmployeesData: ITableData[] = [];
  internshipData: ITableData[] = [];

  selectedTabIndex: number = 1;

  private localStorageKey = 'activeTabIndex';

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    const activeIndex = localStorage.getItem(this.localStorageKey) || '1';
    this.selectedTabIndex = +activeIndex;
  
    this.getAllEmployeesData();
    this.getNewHiresData();
    this.getContractorData();
    this.getPermanentEmployeesData();
    this.getCloseToRetirementEmployeesData();
    this.getFormerEmployeesData();
    this.getInternshipData();
  }

  onTabChange(event: MatTabChangeEvent) {
    localStorage.setItem(this.localStorageKey, event.index.toString());
  }

  private getAllEmployeesData() {
    this.allEmployeesData = this.employeesService.getAllEmployees()
      .filter(employee => this.employeesService.formatStatus(employee.col_status) !== STATUS.TERMINATED);
  }

  private getNewHiresData() {
    const newColumns: ITableColumns[] = [
      { header: 'Probation', columnDef: 'col_probation' }];

    this.newHiresColumns = [...this.allEmployeesColumns, ...newColumns];
    this.newHiresData = this.employeesService.getAllEmployees()
      .filter((employee) => {
        const startDate = moment().subtract(2, 'months');
        const currentDate = moment();
        return moment(employee.col_firstJoined, 'DD.MM.yyyy').isBetween(startDate, currentDate);
      });
  }

  private getContractorData() {
    const newColumns: ITableColumns[] = [
      { header: 'Company Name', columnDef: 'col_companyName' },
      { header: 'Contract', columnDef: 'col_contract' }
    ];

    this.contractorColumns = [...this.allEmployeesColumns, ...newColumns];
    this.contractorData = this.employeesService.getAllEmployees()
      .filter(employee =>
        this.employeesService.formatType(employee.col_type) === TYPE.CONTRACTOR);
  }

  private getPermanentEmployeesData() {
    const newColumns: ITableColumns[] = [
      { header: 'Supervisor', columnDef: 'col_supervisor' }
    ];

    this.permanentEmployeesColumns = [...this.allEmployeesColumns, ...newColumns];
    this.permanentEmployeesData = this.employeesService.getAllEmployees()
      .filter(employee =>
        this.employeesService.formatType(employee.col_type) === TYPE.PERMANENT);
  }

  private getCloseToRetirementEmployeesData() {
    const newColumns: ITableColumns[] = [
      { header: 'Countdown', columnDef: 'col_countdown' }
    ];

    this.closeToRetirementColumns = [...this.allEmployeesColumns, ...newColumns];
    this.closeToRetirementData = this.employeesService.getAllEmployees();
  }

  private getFormerEmployeesData() {
    const newColumns: ITableColumns[] = [
      { header: 'Leave Date', columnDef: 'col_leaveDate' },
      { header: 'Reason for Leaving', columnDef: 'col_reason' }
    ];

    this.formerEmployeesColumns = [...this.allEmployeesColumns, ...newColumns];
    this.formerEmployeesData = this.employeesService.getAllEmployees()
      .filter(employee => this.employeesService.formatStatus(employee.col_status) === STATUS.TERMINATED);

  }

  private getInternshipData() {
    const newColumns: ITableColumns[] = [
      { header: 'Mentor', columnDef: 'col_mentor' },
      { header: 'Start Date - End Date', columnDef: 'col_startEndDate' },
      { header: 'Review From Mentor', columnDef: 'col_review' },
    ];

    this.internshipColumns = [...this.allEmployeesColumns, ...newColumns];
    this.internshipData = this.employeesService.getAllEmployees()
  }

}
