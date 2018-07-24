import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[];
  constructor(private _employeeService: EmployeeService){
  }

  flag=0;
  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}