import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();

  }
  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
  onDelete(id: number) {
    if (confirm('Are you wanted to delete the record?'))
    {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('deleted Successfully', 'Emp Updater');

    });}
  }

}
