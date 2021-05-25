import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form != null) { form.resetForm(); }

    this.service.formData =
    {
      empid: null,
      firstname: '',
      position: '',
      empcode: '',
      mobile: ''

    }
  }

  onSubmit(form: NgForm) {
    if (form.value.empid != null) {
      this.updateRecord(form);
    }
    else {
     
      this.insertRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Emp Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('updated Successfully', 'Emp Updater');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
