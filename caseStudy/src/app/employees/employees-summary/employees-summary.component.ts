import { Component, OnInit } from '@angular/core';
import { EmployeesService,noEmployeesType } from 'src/app/employees.service';

@Component({
  selector: 'app-employees-summary',
  templateUrl: './employees-summary.component.html',
  styleUrls: ['./employees-summary.component.css']
})
export class EmployeesSummaryComponent implements OnInit {

  employeesCount:noEmployeesType;

  constructor(private employeesSvc: EmployeesService) { }

  ngOnInit(): void {
    this.employeesCount = this.employeesSvc.handleEmployeesSummary();
  }

  

}
