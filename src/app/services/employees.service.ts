import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Address, ITableData, ROLE, STATUS, TYPE, Vacation } from "../model/table";
import { EmployeesDataService } from "./employees-data.service";

@Injectable()
export class EmployeesService {

    constructor(private dataService: EmployeesDataService) { }

    getAllEmployees(): ITableData[] {
        const employeeList = this.dataService.getEmployeeList();
        const tableData: ITableData[] = employeeList
            .map((employee) => {
                const formattedName = this.formatName(employee.name || '');
                const { formattedVacation, tooltip } = this.formatVacation(employee.vacation)

                return {
                    col_firstname: formattedName.firstName,
                    col_lastname: formattedName.lastName,
                    col_address: this.formatAddress(employee.address as Address),
                    col_phone: this.formatPhoneNumber(employee.phone),
                    col_role: this.formatRole(employee.role),
                    col_firstJoined: this.formatDate(employee.firstJoined),
                    col_department: employee.department,
                    col_type: this.formatType(employee.type),
                    col_status: this.formatStatus(employee.status),
                    col_probation: employee.leaveDate ? `${this.formatDate(employee.firstJoined)} -${this.formatDate(employee.leaveDate)}` : '',
                    col_companyName: employee.contractor?.companyName,
                    col_contract: `${employee.contractor?.startDate || ''} - ${employee.contractor?.endDate || ''}`,
                    col_leaveDate: this.formatDate(employee.leaveDate || ''),
                    col_reason: employee.reasonForLeaving || '',
                    col_mentor: employee.internship?.mentor,
                    col_startEndDate: `${employee.internship?.startDate || ''} - ${employee.internship?.endDate || ''}`,
                    col_review: employee.internship?.review,
                    col_supervisor: employee.supervisor || '',
                    col_countdown: this.countDown(employee.dateOfBirth),
                    col_vacation: formattedVacation,
                    vacation_tooltip: tooltip
                }
            });

        return tableData;
    }

    countDown(dateOfBirth: string): string {
        const targetAge = 63;
        const currentAge = Number(moment().diff(dateOfBirth, 'years', true));

        if (targetAge - currentAge <= 2) {
            const remainingTime = moment.duration(targetAge - currentAge, 'years');
            const years = remainingTime.years();
            const months = remainingTime.months().toFixed();
            return `${years} years ${months} months`
        }
        else
            return '';
    }

    getEmployeesByType(type: TYPE): ITableData[] {
        return this.getAllEmployees().filter(employee => this.formatType(employee.col_type) === type);
    }

    formatVacation(vacation: Vacation[]): { formattedVacation: string, tooltip: string } {
        let tooltip = '';
        if (!vacation || vacation.length === 0) {
            return { formattedVacation: '-', tooltip: 'No vacations' };
        }

        const sortedVacation = vacation.sort((a, b) => {
            const dateA = moment(a.startDate);
            const dateB = moment(b.startDate);

            return dateA.diff(dateB);
        });

        const lastDate = sortedVacation[sortedVacation.length - 1];
        const formattedVacation = `${lastDate.startDate} - ${lastDate.endDate}`;
        vacation.forEach((item) => { tooltip =  tooltip.concat(`${item.startDate} - ${item.endDate}; \n\n`) });
        console.log(tooltip)

        return { formattedVacation, tooltip }
    }

    formatStatus(status: string): STATUS {
        switch (status.toLowerCase()) {
            case 'terminated':
                return STATUS.TERMINATED;
            case 'active':
                return STATUS.ACTIVE;
            case 'vacation':
                return STATUS.VACATION;
            default:
                return STATUS.TERMINATED;
        }
    }

    formatDate(date: string): string {
        return date ? moment(date).format("DD.MM.yyyy") : '';
    }

    formatType(type: string): TYPE {
        return type.toLowerCase() === 'contractor' ? TYPE.CONTRACTOR : TYPE.PERMANENT;
    }

    private formatName(name: string): { firstName: string, lastName: string } {
        const splitName = name.split(' ');
        const firstName = splitName[0];
        const lastName = splitName[1];

        return { firstName, lastName };
    }

    private formatAddress(address: Address): string {
        return `${address?.country}, ${address?.state}, ${address?.city}`;
    }

    private formatRole(role: string): ROLE {
        switch (role.toLowerCase()) {
            case 'ceo':
                return ROLE.CEO;
            case 'team lead':
                return ROLE.TEAM_LEAD;
            case 'software developer':
                return ROLE.DEV;
            case 'qa engineer':
                return ROLE.QA;
            case 'product owner':
                return ROLE.PO
            default:
                return ROLE.PM;
        }
    }

    private formatPhoneNumber(phoneNumber: string): string {
        const prefix = '+1 ';
        return `${prefix}${phoneNumber}`;
    }
}
