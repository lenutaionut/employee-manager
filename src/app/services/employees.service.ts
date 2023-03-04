import * as moment from "moment";
import { Address, ITableData, ROLE, STATUS, TYPE } from "../model/table";


export class EmployeesService {

    test = '';

    constructor() { }

    getAllEmployees(): ITableData[] {
        const employeeList = this.getEmployeeList();
        const tableData: ITableData[] = employeeList
            .map((employee) => {
                const formattedName = this.formatName(employee.name || '');

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
                    col_review: employee.internship?.review
                }
            });

        return tableData;

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

    private getEmployeeList() {
        return [
            {
                name: 'Chris V',
                address: {
                    city: 'Portland',
                    country: 'USA',
                    state: 'OR',
                    street: '122nd Ave',
                    nr: '1234'
                },
                phone: '0751183938',
                role: 'Software Developer',
                firstJoined: '02-03-2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Development',
                type: 'permanent',
                status: 'Terminated',
                dateOfBirth: '06.26.1991',
                leaveDate: '02.24.2023',
                reasonForLeaving: 'Unqualified'
            },
            {
                name: 'John Smith',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '9836985742',
                role: 'QA Engineer',
                firstJoined: '02.01.2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Contractor',
                status: 'Vacation',
                dateOfBirth: '20.06.1981',
                contractor: {
                    companyName: "Company test",
                    startDate: '02.02.2023',
                    endDate: '09.05.2023'
                }
            },
            {
                name: 'Mark Johnson',
                address: {
                    city: 'Chicago',
                    country: 'USA',
                    state: 'IL',
                    street: 'S Wacker Dr',
                    nr: '874'
                },
                phone: '4563298652',
                role: 'Product Owner',
                firstJoined: '01.01.2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '12.03.1994',
                supervisor: 'Popescu Mihai'
            },
            {
                name: 'Tom Davis',
                address: {
                    city: 'Montréal',
                    country: 'Canada',
                    state: 'QC',
                    street: 'Blvd Robert-Bourassa',
                    nr: '7745'
                },
                phone: '4589565892',
                role: 'Project Manager',
                firstJoined: '03.06.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Management',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '06.26.1991',
            },
            {
                name: 'Emma Brown',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '0894874987',
                role: 'QA Engineer',
                firstJoined: '02.03.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '04.06.1991',
            },
            {
                name: 'Jack T',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '0894874987',
                role: 'Team Lead',
                firstJoined: '03.02.2022',
                vacation: {
                    startDate: '02.03.2022',
                    endDate: '11.03.2022'
                },
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '26.06.1991',
                contractor: {
                    companyName: "Contractor company",
                    startDate: '01.01.2022',
                    endDate: '06.05.2023'
                }
            },
            {
                name: 'Luke Smith',
                address: {
                    city: 'Dallas',
                    country: 'USA',
                    state: 'TX',
                    street: ' Herb Kelleher Way',
                    nr: '45'
                },
                phone: '8954879589',
                role: 'CEO',
                firstJoined: '02.01.2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'CEO',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '02.12.2001'
            },
            {
                name: 'Emily Brown',
                address: {
                    city: 'Ottawa',
                    country: 'Canada',
                    state: 'ON',
                    street: 'Albert St',
                    nr: '78'
                },
                phone: '9812678788',
                role: 'QA Engineer',
                firstJoined: '01.02.2020',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '12.06.1961',
            },
            {
                name: 'Tom Taylor',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '5445'
                },
                phone: '9874563589',
                role: 'Software Developer',
                firstJoined: '03.05.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Development',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '10.06.1971',
                contractor: {
                    companyName: "Company test",
                    startDate: '02.02.2023',
                    endDate: '09.05.2023'
                }
            },
            {
                name: 'Ann Taylor',
                address: {
                    city: 'Ajax',
                    country: 'Canada',
                    state: 'ON',
                    street: 'Salem Rd N',
                    nr: '365'
                },
                phone: '0879513587',
                role: 'Software Developer',
                firstJoined: '02.05.2022',
                vacation: {
                    startDate: '01.03.2022',
                    endDate: '01.04.2022'
                },
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '11.06.1992',
            },
            {
                name: 'Emily Gray',
                address: {
                    city: 'Dallas',
                    country: 'USA',
                    state: 'TX',
                    street: 'Salem Rd N',
                    nr: '365'
                },
                phone: '0879513587',
                role: 'Software Developer',
                firstJoined: '02.05.2022',
                vacation: {
                    startDate: '01.03.2022',
                    endDate: '01.04.2022'
                },
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '25.06.1996',
                internship: {
                    mentor: 'Mark T',
                    startDate: '01.01.2023',
                    endDate: '01.06.2023',
                    review: 'This is the review'
                }
            },
            {
                name: 'Luke Smith',
                address: {
                    city: 'Dallas',
                    country: 'USA',
                    state: 'TX',
                    street: ' Herb Kelleher Way',
                    nr: '45'
                },
                phone: '8954879589',
                role: 'CEO',
                firstJoined: '01.01.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'CEO',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '02.12.2001'
            },
            {
                name: 'Emily Brown',
                address: {
                    city: 'Ottawa',
                    country: 'Canada',
                    state: 'ON',
                    street: 'Albert St',
                    nr: '78'
                },
                phone: '9812678788',
                role: 'QA Engineer',
                firstJoined: '01.02.2020',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '01.06.1961',
            },
            {
                name: 'Tom Taylor',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '5445'
                },
                phone: '9874563589',
                role: 'Software Developer',
                firstJoined: '03.05.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Development',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '05.06.1971',
                contractor: {
                    companyName: "Company test",
                    startDate: '02.02.2023',
                    endDate: '09.05.2023'
                }
            },
            {
                name: 'Mary P',
                address: {
                    city: 'Portland',
                    country: 'USA',
                    state: 'OR',
                    street: '122nd Ave',
                    nr: '1234'
                },
                phone: '0751183938',
                role: 'Software Developer',
                firstJoined: '02.03.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Development',
                type: 'permanent',
                status: 'Terminated',
                dateOfBirth: '03.06.1991',
                leaveDate: '02.02.2023',
                reasonForLeaving: 'Got a better job offer'
            },
            {
                name: 'John Smith',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '9836985742',
                role: 'QA Engineer',
                firstJoined: '01.10.2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Contractor',
                status: 'Vacation',
                dateOfBirth: '20.06.1981',
                contractor: {
                    companyName: "Company test",
                    startDate: '02.02.2023',
                    endDate: '09.05.2023'
                }
            },
            {
                name: 'Mark Johnson',
                address: {
                    city: 'Chicago',
                    country: 'USA',
                    state: 'IL',
                    street: 'S Wacker Dr',
                    nr: '874'
                },
                phone: '4563298652',
                role: 'Product Owner',
                firstJoined: '02.05.2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '16.03.1994',
                supervisor: 'Popescu Mihai'
            },
            {
                name: 'Tom Davis',
                address: {
                    city: 'Montréal',
                    country: 'Canada',
                    state: 'QC',
                    street: 'Blvd Robert-Bourassa',
                    nr: '7745'
                },
                phone: '4589565892',
                role: 'Project Manager',
                firstJoined: '03.06.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Management',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '26.06.1991',
            },
            {
                name: 'Emma Brown',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '0894874987',
                role: 'QA Engineer',
                firstJoined: '02.03.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '26.06.1991',
            },
            {
                name: 'Emma Brown',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '0894874987',
                role: 'QA Engineer',
                firstJoined: '02.03.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '26.06.1991',
            },
            {
                name: 'Tom Taylor',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '45'
                },
                phone: '0894874987',
                role: 'Team Lead',
                firstJoined: '03.02.2022',
                vacation: {
                    startDate: '02.03.2022',
                    endDate: '11.03.2022'
                },
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '26.06.1991',
                contractor: {
                    companyName: "Contractor company",
                    startDate: '01.01.2022',
                    endDate: '06.05.2023'
                }
            },
            {
                name: 'Luke Smith',
                address: {
                    city: 'Dallas',
                    country: 'USA',
                    state: 'TX',
                    street: ' Herb Kelleher Way',
                    nr: '45'
                },
                phone: '8954879589',
                role: 'CEO',
                firstJoined: '05.01.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'CEO',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '02.12.2001'
            },
            {
                name: 'Emily Brown',
                address: {
                    city: 'Ottawa',
                    country: 'Canada',
                    state: 'ON',
                    street: 'Albert St',
                    nr: '78'
                },
                phone: '9812678788',
                role: 'QA Engineer',
                firstJoined: '01.02.2020',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '26.06.1961',
            },
            {
                name: 'Tom Taylor',
                address: {
                    city: 'Burbank',
                    country: 'USA',
                    state: 'CA',
                    street: 'Warner Blvd',
                    nr: '5445'
                },
                phone: '9874563589',
                role: 'Software Developer',
                firstJoined: '03.05.2022',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Development',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '25.06.1971',
                contractor: {
                    companyName: "Company test",
                    startDate: '02.02.2023',
                    endDate: '09.05.2023'
                }
            },
            {
                name: 'Ann Taylor',
                address: {
                    city: 'Ajax',
                    country: 'Canada',
                    state: 'ON',
                    street: 'Salem Rd N',
                    nr: '365'
                },
                phone: '0879513587',
                role: 'Software Developer',
                firstJoined: '02.05.2022',
                vacation: {
                    startDate: '01.03.2022',
                    endDate: '01.04.2022'
                },
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '26.06.1992',
            },
            {
                name: 'Emily Gray',
                address: {
                    city: 'Dallas',
                    country: 'USA',
                    state: 'TX',
                    street: 'Salem Rd N',
                    nr: '365'
                },
                phone: '0879513587',
                role: 'Software Developer',
                firstJoined: '02.05.2022',
                vacation: {
                    startDate: '01.03.2022',
                    endDate: '01.04.2022'
                },
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '25.06.1996',
                internship: {
                    mentor: 'Mark T',
                    startDate: '01.01.2023',
                    endDate: '01.06.2023',
                    review: 'This is the review'
                }
            },
            {
                name: 'Chris M',
                address: {
                    city: 'Portland',
                    country: 'USA',
                    state: 'OR',
                    street: '122nd Ave',
                    nr: '1234'
                },
                phone: '0778256898',
                role: 'Software Developer',
                firstJoined: '01.03.2023',
                vacation: {
                    startDate: '',
                    endDate: ''
                },
                department: 'Development',
                type: 'permanent',
                status: 'Terminated',
                dateOfBirth: '26.06.1991',
                leaveDate: '02.02.2023',
                reasonForLeaving: 'Refused the offer'
            },
        ];
    }
}