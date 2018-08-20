import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //gender = 'Male'; MAKE CHECKED BYDEFAULT
  //isActive = true;
  previewPhoto = false;

  togglePhotoPreview(){
    this.previewPhoto =!this.previewPhoto;
  }

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm):void{
    console.log(empForm.value);
  }

}
