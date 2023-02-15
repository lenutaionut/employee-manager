export interface ITableColumns {
    header: string;
    columnDef: string;
}

export const EmployeesTableColumns = [
    { header: 'First Name', columnDef: 'col_firstname' },
    { header: 'Last Name', columnDef: 'col_lastname' }
]