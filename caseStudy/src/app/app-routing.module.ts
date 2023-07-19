import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesSummaryComponent } from './employees/employees-summary/employees-summary.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'employees', component: EmployeesComponent,canActivate:[AuthGuard], children:[
    {path: 'employees-list', component: EmployeesListComponent},
    {path: 'employees-summary', component: EmployeesSummaryComponent},
  ]},
  {path: '', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
