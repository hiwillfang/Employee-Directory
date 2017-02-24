import {Component} from 'angular2/core';

@Component ({
  selector: 'employee-item',
  templateUrl: 'partials/employeeitem.html',
  styleUrls : ['css/app-items.css'],
  inputs: ['employee']
})

export class EmployeeItemComponent {}
