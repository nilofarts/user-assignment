import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { Employees } from "../models/employees";
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  employeesList: Employees[];
  isDesc: boolean = false;
  column: string = "name";
  direction: number;
  constructor(private router: Router, private employeesService: EmployeeService) {
  }

  ngOnInit() { }
  getData() {
    this.employeesList = [];
    this.employeesService.getEmployees().subscribe(data => {
      this.employeesList = data;
      console.log("get", this.employeesList);
    });
  }

  sort(property) {
    if (this.employeesList != null || this.employeesList != undefined) {
      this.isDesc = !this.isDesc; //change the direction
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
    }
  }

  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }
  logOut() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
