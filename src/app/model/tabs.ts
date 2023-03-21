import { ITableColumns, ITableData } from "./table";

export interface ITabs {
    title: string;
    path: string;
}

export interface IMatTabs {
    label: string;
    columns: ITableColumns[];
    tableData: ITableData[];
}
