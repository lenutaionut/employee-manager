export class EmployeesDataService {
    getEmployeeList() {
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
                vacation: [{
                    startDate: '03.03.2023',
                    endDate: '03.07.2023'
                }],
                department: 'Development',
                type: 'permanent',
                status: 'Terminated',
                dateOfBirth: '06.26.1991',
                leaveDate: '02.24.2023',
                reasonForLeaving: 'Unqualified',
                supervisor: 'Marie K'
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
                vacation: [],
                department: 'Testing',
                type: 'Contractor',
                status: 'Vacation',
                dateOfBirth: '02.06.1981',
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
                vacation: [{
                    startDate: '03.03.2023',
                    endDate: '03.15.2023'
                }],
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
                vacation: [{
                    startDate: '11.25.2022',
                    endDate: '01.02.2023'
                },
                {
                    startDate: '02.12.2023',
                    endDate: '02.14.2023'
                }],
                department: 'Management',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '06.26.1991',
                supervisor: 'Emma B'
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
                vacation:[],
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '04.06.1991',
                supervisor: 'Marie K'
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
                vacation: [],
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '05.26.1991',
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
                vacation:[{
                    startDate: '02.25.2023',
                    endDate: '02.28.2023'
                }],
                department: 'CEO',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '02.12.2001',
                supervisor: 'Mark T'
            },
            {
                name: 'Emily B',
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
                vacation: [{
                    startDate: '06.09.2020',
                    endDate: '07.09.2020'
                },
                {
                    startDate: '12.20.2020',
                    endDate: '01.02.2021'
                },
                {
                    startDate: '07.25.2021',
                    endDate: '08.20.2021'
                },
                {
                    startDate: '09.03.2022',
                    endDate: '09.22.2022'
                },
                {
                    startDate: '11.22.2022',
                    endDate: '01.02.2023'
                },],
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '12.06.1961',
                supervisor: 'Mark T'
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
                vacation: [{
                    startDate: '06.22.2022',
                    endDate: '07.09.2022'
                },
                {
                    startDate: '12.23.2022',
                    endDate: '01.03.2023'
                }],
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
                vacation: [{
                    startDate: '06.22.2022',
                    endDate: '07.03.2022'
                },
                {
                    startDate: '12.20.2023',
                    endDate: '01.02.2023'
                }],
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '11.06.1992',
                supervisor: 'Antonny '
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
                vacation: [],
                department: 'Development',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '02.26.1996',
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
                vacation: [
                {
                    startDate: '07.25.2022',
                    endDate: '08.03.2022'
                },],
                department: 'CEO',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '02.12.2001'
            },
            {
                name: 'Mark Gegvd',
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
                vacation: [{
                    startDate: '06.10.2020',
                    endDate: '06.23.2020'
                },
                {
                    startDate: '12.20.2021',
                    endDate: '01.02.2022'
                },
                {
                    startDate: '07.25.2022',
                    endDate: '08.20.2022'
                }],
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
                vacation: [
                {
                    startDate: '07.25.2022',
                    endDate: '08.20.2022'
                },
                {
                    startDate: '12.09.2022',
                    endDate: '01.01.2023'
                },
            ],
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
                vacation: [],
                department: 'Development',
                type: 'permanent',
                status: 'Terminated',
                dateOfBirth: '03.06.1991',
                leaveDate: '02.02.2023',
                reasonForLeaving: 'Got a better job offer',
                supervisor: 'Mark T'
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
                vacation: [],
                department: 'Testing',
                type: 'Contractor',
                status: 'Vacation',
                dateOfBirth: '10.06.1981',
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
                vacation: [],
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '06.16.1994',
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
                vacation: [{
                    startDate: '06.09.2022',
                    endDate: '07.09.2022'
                },
                {
                    startDate: '12.20.2022',
                    endDate: '01.02.2023'
                }],
                department: 'Management',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '06.06.1961',
                supervisor: 'Mark T'
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
                vacation: [
                {
                    startDate: '07.25.2022',
                    endDate: '08.20.2022'
                },],
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '06.13.1963',
                supervisor: 'Lucy G'
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
                vacation: [{
                    startDate: '06.09.2022',
                    endDate: '07.09.2022'
                },
                {
                    startDate: '12.20.2022',
                    endDate: '01.02.2023'
                },
                {
                    startDate: '02.03.2023',
                    endDate: '02.09.2023'
                }],
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '03.06.1991',
                supervisor: 'Marie K'
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
                vacation: [],
                department: 'Management',
                type: 'Contractor',
                status: 'Active',
                dateOfBirth: '01.06.1991',
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
                vacation: [],
                department: 'CEO',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '02.12.2001',
                supervisor: 'Ssam O'
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
                vacation: [{
                    startDate: '07.12.2020',
                    endDate: '07.20.2020'
                },
                {
                    startDate: '12.20.2020',
                    endDate: '01.02.2021'
                },
                {
                    startDate: '07.22.2021',
                    endDate: '08.06.2021'
                },],
                department: 'Testing',
                type: 'Permanent',
                status: 'Vacation',
                dateOfBirth: '06.06.1961',
                supervisor: 'Antony F'
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
                vacation: [],
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
                vacation: [],
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '06.06.1992',
                supervisor: 'Mark T'
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
                vacation: [],
                department: 'Development',
                type: 'Permanent',
                status: 'Active',
                dateOfBirth: '05.06.1996',
                internship: {
                    mentor: 'Mark T',
                    startDate: '01.01.2023',
                    endDate: '01.06.2023',
                    review: 'This is the review'
                },
                supervisor: 'Marie K'
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
                vacation: [],
                department: 'Development',
                type: 'permanent',
                status: 'Terminated',
                dateOfBirth: '06.06.1991',
                leaveDate: '02.02.2023',
                reasonForLeaving: 'Refused the offer',
                supervisor: 'Emilly B'
            },
        ];
    }
}
