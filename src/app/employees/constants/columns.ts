export interface ITableColumns {
    header: string;
    columnDef: string;
}

export interface ITableData {
    col_firstname: string;
    col_lastname: string;
    col_address: string;
    col_phone?: string;
    col_role: ROLE;
    col_firstJoined?: Date;
    col_vacation?: string;
    col_department: string;
    col_type: TYPE;
    col_status: STATUS;
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
    QA = 'Quality Assurance Engineer',
    PO = 'Product Owner',
    PM = 'Project Manager'
}