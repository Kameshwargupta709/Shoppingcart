import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  employees : Employee[];
  flag=0;
  constructor(private _employeeService: EmployeeService){
   
  }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}

  