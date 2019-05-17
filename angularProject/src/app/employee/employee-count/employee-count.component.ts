import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input() public all: number;
  @Input() public females: number;
  @Input() public males: number;

  selectedRadioButtonValue: string = 'All';

  @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }

}
