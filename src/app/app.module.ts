import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { TextFieldModule } from '@angular/cdk/text-field';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './shared-modules/material.module';
import { EmployeePagesComponent } from './modules/employee-pages/employee-pages.component';
import { CommonTableModule } from './shared-modules/common-table/common-table.module';
import { EmployeesDataService } from './services/employees-data.service';
import { EmployeesService } from './services/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    EmployeePagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TextFieldModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonTableModule
  ],
  providers: [EmployeesDataService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
