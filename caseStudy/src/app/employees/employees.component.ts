import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesSvc: EmployeesService) { }

  ngOnInit(): void {
  }

  handleSummary(){
    this.employeesSvc.handleEmployeesSummary();
  }

}
