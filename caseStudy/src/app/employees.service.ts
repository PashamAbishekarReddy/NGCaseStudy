import { Injectable } from '@angular/core';

export interface noEmployeesType{
  totalEmployees: number,
  softwareNo: number,
  accountNo: number,
  designingNo: number,
  managementNo: number,
}

export interface employeeType{
  EmployeeId: number,
  firstName: string,
  lastName: string,
  department: string,
  dateOfJoining: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  employeesList: employeeType[] = [
    {
        EmployeeId: 1111,
        firstName: 'Kyrie',
        lastName: 'Irving',
        department: 'Software',
        dateOfJoining: '02/12/2022'
    },
    {
        EmployeeId: 2222,
        firstName: 'Lebron',
        lastName: 'James',
        department: 'Account',
        dateOfJoining: '05/06/2011'
    },
    {
        EmployeeId: 3333,
        firstName: 'Kobe',
        lastName: 'Bryant',
        department: 'Designing',
        dateOfJoining: '03/09/2017'
    },
    {
        EmployeeId: 4444,
        firstName: 'Steph',
        lastName: 'Curry',
        department: 'Management',
        dateOfJoining: '01/04/2002'
    },
    {
      EmployeeId: 5555,
      firstName: 'Giannis',
      lastName: 'Antetokounmpo',
      department: 'Software',
      dateOfJoining: '20/07/2014'
    },
    {
      EmployeeId: 6666,
      firstName: 'Luka',
      lastName: 'Doncic',
      department: 'Account',
      dateOfJoining: '11/12/2018'
    },
    {
      EmployeeId: 7777,
      firstName: 'Michal',
      lastName: 'Jordan',
      department: 'Software',
      dateOfJoining: '04/01/2001'
    },
]

  getEmployeesList(){
    return this.employeesList;
  }

  deleteEmployeeData(employeeData: employeeType){
    this.employeesList.splice(this.employeesList.findIndex(a => a.EmployeeId === employeeData.EmployeeId) , 1)
  }

  newData(newEmployeeData: employeeType){
    let addNewEmployee = true;
    for(let i=0; i<this.employeesList.length;i++){
      if(this.employeesList[i].EmployeeId === newEmployeeData.EmployeeId){
        if(JSON.stringify(this.employeesList[i]) === JSON.stringify(newEmployeeData)){
          alert("Employee already present in Record....");
          addNewEmployee = false;
          break;
        }else{
          this.employeesList[i].EmployeeId = newEmployeeData.EmployeeId;
          this.employeesList[i].firstName = newEmployeeData.firstName;
          this.employeesList[i].lastName = newEmployeeData.lastName;
          this.employeesList[i].department = newEmployeeData.department;
          this.employeesList[i].dateOfJoining = newEmployeeData.dateOfJoining;
          addNewEmployee = false;
          break;
        }
      }
    }

    if(addNewEmployee){
      this.employeesList.push(newEmployeeData);
    }
  }

  count: noEmployeesType = {
    totalEmployees: 0,
    softwareNo: 0,
    accountNo: 0,
    designingNo: 0,
    managementNo: 0,
  }

  handleEmployeesSummary(){
    let employeesCount = Object.assign({},this.count);
    employeesCount.totalEmployees = this.employeesList.length;
    for(let i=0; i<this.employeesList.length;i++){
      switch(this.employeesList[i].department){
        case 'Software': employeesCount.softwareNo++; break;
        case 'Account': employeesCount.accountNo++; break;
        case 'Designing': employeesCount.designingNo++; break;
        case 'Management': employeesCount.managementNo++; break;
      }
    }
    return employeesCount;
  }

}
