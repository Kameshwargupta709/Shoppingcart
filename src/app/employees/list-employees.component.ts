import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[]=[
    {
      id:1,
    name:'Mark Zuckerberg',
    gender:'Male',
    email:'mark@pragimtech.com',
    phonenumber:'7832789738',
    contactPreference:'Email',
    dateOfBirth:new Date('10/25/1998'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/Mark Zuckerberg.jpg'
    },
    {
      id:2,
    name:'Mary',
    gender:'Female',
    email:'mary@pragimtech.com',
    phonenumber:'2323313267',
    contactPreference:'Phone',
    dateOfBirth:new Date('08/22/1989'),
    department:'HR',
    isActive:true,
    photoPath:'assets/images/lady img1.jpg'
    },
    {
      id:3,
    name:'Bill Gates',
    gender:'Male',
    email:'BILL@pragimtech.com',
    phonenumber:'4123421456',
    contactPreference:'Email',
    dateOfBirth:new Date('11/23/1969'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/bill gates.jpg'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
