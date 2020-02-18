import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http";

import { Employees } from "../models/employees";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private _endPoint = "https://jsonplaceholder.typicode.com/users";
  getEmployees() {
    return this.http.get<Employees[]>(this._endPoint);
  }
}
