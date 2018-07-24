import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import {EmployeeService} from './employees/employee.service';
import { CartComponent } from './employees/cart.component';

const appRoutes: Routes=[
  {path:'list', component: ListEmployeesComponent} 
];


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
