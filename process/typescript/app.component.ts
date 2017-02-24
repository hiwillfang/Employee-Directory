import {Component} from 'angular2/core';
import {Employee} from './employee';
import {EmployeeItemComponent} from './employee-item.component';
import {EmployeeDetailsComponent} from './employee-details.component';
import {SearchPipe} from './search-pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [EmployeeItemComponent, EmployeeDetailsComponent],
  pipes: [SearchPipe],
  styleUrls: ['css/app.css']
})

export class AppComponent {
  employee = EMPLOYEE;
  currentEmployee: Employee;

  showEmployee(item) {
    this.currentEmployee = item;
  }
}

var EMPLOYEE: Employee[] = [
  {
    "name":"Brad Chandonnet",
    "shortname":"Brad_Chandonnet",
    "reknown":"Web Developer"
  }, {
    "name":"Will Fang",
    "shortname":"Will_Fang",
    "reknown":"Front-end Developer"
  }, {
    "name":"Phil Palmieri",
    "shortname":"Phil_Palmieri",
    "reknown":"Web Developer"
  }, {
    "name":"Jason Crane",
    "shortname":"Jason_Crane",
    "reknown":"Web Developer"
  }, {
    "name":"Tara Cochran",
    "shortname":"Tara_Cochran",
    "reknown":"Web Project Manager"
  }, {
    "name":"Maria Martinez",
    "shortname":"Maria_Martinez",
    "reknown":"Consulting Writer"
  }, {
    "name":"Ashmy Daniel",
    "shortname":"Ashmy_Daniel",
    "reknown":"UI/UX Designer"
  }, {
    "name":"Brad Miller",
    "shortname":"Brad_Miller",
    "reknown":"IT Director"
  }, {
    "name":"Sharon Brumer",
    "shortname":"Sharon_Brumer",
    "reknown":"Senior Employee Communications Consultant"
  }
]
