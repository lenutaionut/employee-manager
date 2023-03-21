import { Injectable } from "@angular/core";
import * as moment from "moment";
import { EmployeesTableColumns } from "src/app/model/employee";
import { ITableColumns, ITableData, STATUS, TYPE } from "src/app/model/table";
import { IMatTabs } from "src/app/model/tabs";
import { EmployeesService } from "src/app/services/employees.service";

@Injectable()
export class EmployeePagesService {

    constructor(private employeesService: EmployeesService) { }

    allEmployeesCol = EmployeesTableColumns;
    newHiresCol: ITableColumns[] = [];
    contractorCol: ITableColumns[] = [];
    permanentEmployeesCol: ITableColumns[] = [];
    closeToRetirementCol: ITableColumns[] = [];
    formerEmployeesCol: ITableColumns[] = [];
    internshipCol: ITableColumns[] = [];

    newHiresData: ITableData[] = [];
    allEmployeesData: ITableData[] = [];
    contractorData: ITableData[] = [];
    permanentEmployeesData: ITableData[] = [];
    closeToRetirementData: ITableData[] = [];
    formerEmployeesData: ITableData[] = [];
    internshipData: ITableData[] = [];

    initTableData() {
        this.getAllEmployeesData();
        this.getNewHiresData();
        this.getContractorData();
        this.getPermanentEmployeesData();
        this.getCloseToRetirementEmployeesData();
        this.getFormerEmployeesData();
        this.getInternshipData();
    }

    getTabsData(): IMatTabs[] {
        return [
            { label: "New Hires", columns: this.newHiresCol, tableData: this.newHiresData },
            { label: "All Employees", columns: this.allEmployeesCol, tableData: this.allEmployeesData },
            { label: "Contractor", columns: this.contractorCol, tableData: this.contractorData },
            { label: "Permanent Employees", columns: this.permanentEmployeesCol, tableData: this.permanentEmployeesData },
            { label: "Employees close to retirement", columns: this.closeToRetirementCol, tableData: this.closeToRetirementData },
            { label: "Former Employees", columns: this.formerEmployeesCol, tableData: this.formerEmployeesData },
            { label: "Internship", columns: this.internshipCol, tableData: this.internshipData }
        ];
    }

    getAllEmployeesData() {
        this.allEmployeesData = this.employeesService.getAllEmployees()
            .filter(employee => this.employeesService.formatStatus(employee.col_status) !== STATUS.TERMINATED);
    }

    getNewHiresData() {
        const newColumns: ITableColumns[] = [
            { header: 'Probation', columnDef: 'col_probation' }];

        this.newHiresCol = [...this.allEmployeesCol, ...newColumns];
        this.newHiresData = this.employeesService.getAllEmployees()
            .filter((employee) => {
                const startDate = moment().subtract(2, 'months');
                const currentDate = moment();
                return moment(employee.col_firstJoined, 'DD.MM.yyyy').isBetween(startDate, currentDate);
            });
    }

    getContractorData() {
        const newColumns: ITableColumns[] = [
            { header: 'Company Name', columnDef: 'col_companyName' },
            { header: 'Contract', columnDef: 'col_contract' }
        ];

        this.contractorCol = [...this.allEmployeesCol, ...newColumns];
        this.contractorData = this.employeesService.getEmployeesByType(TYPE.CONTRACTOR);
    }

    getPermanentEmployeesData() {
        const newColumns: ITableColumns[] = [
            { header: 'Supervisor', columnDef: 'col_supervisor' }
        ];

        this.permanentEmployeesCol = [...this.allEmployeesCol, ...newColumns];
        this.permanentEmployeesData = this.employeesService.getEmployeesByType(TYPE.PERMANENT);
    }

    getCloseToRetirementEmployeesData() {
        const newColumns: ITableColumns[] = [
            { header: 'Countdown', columnDef: 'col_countdown' }
        ];

        this.closeToRetirementCol = [...this.allEmployeesCol, ...newColumns];
        this.closeToRetirementData = this.employeesService.getAllEmployees()
            .filter(employee => employee.col_countdown);
    }

    getFormerEmployeesData() {
        const newColumns: ITableColumns[] = [
            { header: 'Leave Date', columnDef: 'col_leaveDate' },
            { header: 'Reason for Leaving', columnDef: 'col_reason' }
        ];

        this.formerEmployeesCol = [...this.allEmployeesCol, ...newColumns];
        this.formerEmployeesData = this.employeesService.getAllEmployees()
            .filter(employee => this.employeesService.formatStatus(employee.col_status) === STATUS.TERMINATED);

    }

    getInternshipData() {
        const newColumns: ITableColumns[] = [
            { header: 'Mentor', columnDef: 'col_mentor' },
            { header: 'Start Date - End Date', columnDef: 'col_startEndDate' },
            { header: 'Review From Mentor', columnDef: 'col_review' },
        ];

        this.internshipCol = [...this.allEmployeesCol, ...newColumns];
        this.internshipData = this.employeesService.getAllEmployees()
    }

}