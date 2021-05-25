import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData : Employee;
  list : Employee[];
  readonly apiUrl = "https://localhost:44323/api";
  constructor(private http : HttpClient) { }


  postEmployee(formData: Employee)
  {
return this.http.post(this.apiUrl + '/empdatas',formData);
  }
  refreshList()
  {
    this.http.get(this.apiUrl + '/empdatas').toPromise().then(res => this.list = res as Employee[])
  }

  putEmployee(formData: Employee)
  {
return this.http.put (this.apiUrl + '/empdatas/'+ formData.empid,formData);
  }
  deleteEmployee(id: number)
  {
    return this.http.delete(this.apiUrl+'/empdatas/'+id);
  }
}
