import {Component} from 'angular2/core';
import {Employee} from './employee';

@Component({
  selector: 'employee-details',
  templateUrl: 'partials/employeedetails.html',
  inputs: ['employee'],
  styleUrls: ['css/app-details.css']
})

export class EmployeeDetailsComponent{}
