import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {EmployeesService, employeeType} from '../../employees.service'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeesSvc: EmployeesService) { }

  ngOnInit(): void {
  }

  employeesData: employeeType[] = this.employeesSvc.getEmployeesList();
  editEmployeeData:employeeType;
  show: boolean = false;
  employeeForm = new FormGroup({
    EmployeeId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    department: new FormControl(''),
    dateOfJoining: new FormControl('')
  });

  handleEditMode(employeesData: employeeType){
    this.show = true;
    this.editEmployeeData = employeesData;
    this.employeeForm.setValue({
      EmployeeId: this.editEmployeeData.EmployeeId, 
      firstName: this.editEmployeeData.firstName,
      lastName: this.editEmployeeData.lastName,
      department: this.editEmployeeData.department,
      dateOfJoining: this.editEmployeeData.dateOfJoining
    })
  }

  handleCancel(){
    this.show = false;
  }

  handleAdd(){
    this.show = true;
  }

  handleSave(){
    console.log(this.employeeForm.value);
    let formValues = this.employeeForm.value;
    this.employeesSvc.newData(formValues);
    this.employeeForm.reset();
    this.show = false;
  }

  handleDelete(employeesData: employeeType){
    this.employeesSvc.deleteEmployeeData(employeesData);
  }

}
