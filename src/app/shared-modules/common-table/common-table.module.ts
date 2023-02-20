import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { CommonTableComponent } from "./common-table.component";

@NgModule({
    declarations: [
        CommonTableComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        CommonTableComponent
    ]
})
export class CommonTableModule { }