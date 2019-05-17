import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees = [];
  errorMsg: string;

  @Input() public messageFromAppParent: string;
  @Output() public childMessageEmitter = new EventEmitter();

  dataFromEmployeeCount: string = "All";

  getTotalEmployeesCount() {
    return this.employees.length;
  }

  getFemaleEmployeesCount() {
    return this.employees.filter(element => element.gender == 'F').length;
  }

  getMaleEmployeesCount() {
    return this.employees.filter(element => element.gender == 'M').length;
  }

  constructor(private employeeService: EmployeeService) { }

  getEmployeeDetails() {
    this.employeeService.getEmployeeDetails()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

  childEventEmitter() {
    this.childMessageEmitter.emit("Thank you Infosys");
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string) {
    this.dataFromEmployeeCount = selectedRadioButtonValue;
  }



}
