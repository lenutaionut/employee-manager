export interface ITableColumns {
    header: string;
    columnDef: string;
}

export interface ITableData {
    col_firstname: string,
    col_lastname: string,
    col_address: string,
    col_phone: string,
    col_role: ROLE,
    col_firstJoined: string,
    col_vacation?: any,
    col_department: string,
    col_type: TYPE,
    col_status: STATUS,

    col_probation?: string,
    col_companyName?: string,
    col_contract?: string,
    col_countdown?: string,
    col_leaveDate?: string,
    col_reason?: string,
    col_mentor?: string,
    col_startEndDate?: string,
    col_review?: string,
    col_supervisor?: string,
    vacation_tooltip?: any
}

export interface ITableDataPermanent extends ITableData {
    col_supervisor: string
}

export interface Address {
    city: string,
    country: string,
    state: string,
    street: string,
    nr: string
}

export interface Contractor {
    companyName: string,
    contract: string
}

export interface Vacation {
    startDate: string;
    endDate: string;
}

export enum TYPE {
    CONTRACTOR = 'Contractor',
    PERMANENT = 'Permanent'
}

export enum STATUS {
    TERMINATED = 'Terminated',
    ACTIVE = 'Active',
    VACATION = 'Vacation'
}

export enum ROLE {
    CEO = 'CEO',
    TEAM_LEAD = 'Team Lead',
    DEV = 'Software Developer',
    QA = 'QA Engineer',
    PO = 'Product Owner',
    PM = 'Project Manager'
}

export enum DEPARTMENT {
    DEVELOPMENT = 'Development',
    TEST = 'Testing',
    MANAGEMENT = 'Management',
    CEO = 'CEO'
}
