import {Injectable} from '@angular/core';
import{Employee} from '../models/employee.model';


@Injectable({
   providedIn:"root"

})
export class EmployeeService{
    private listEmployees: Employee[]=[
    {
      id:1,
    name:'OPPO',
    type:'Smartphone',
    email:'mark@pragimtech.com',
    phonenumber:'7832789738',
    contactPreference:'Email',
    dateOfBirth:new Date('10/25/1998'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/OPPO.png'
    },
    {
      id:2,
    name:'VIVO',
    type:'Smartphone',
    email:'mary@pragimtech.com',
    phonenumber:'2323313267',
    contactPreference:'Phone',
    dateOfBirth:new Date('08/22/1989'),
    department:'HR',
    isActive:true,
    photoPath:'assets/images/VIVO.jpg'
    },
    {
      id:3,
    name:'LG',
    type:'Smartphone',
    email:'BILL@pragimtech.com',
    phonenumber:'4123421456',
    contactPreference:'Email',
    dateOfBirth:new Date('11/23/1969'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/LG.jpg'
    },

  ];

  getEmployees(): Employee[]{
      return this.listEmployees;
  }
}