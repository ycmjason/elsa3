import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

import {Class} from "../../models/Class";
import {Department} from "../../models/Department";

import {DepartmentService} from "../../services/department.service";

@Component({
  selector: "elsa-nav",
  templateUrl: "app/components/nav/template.html",
  styleUrls: ["app/components/nav/style.css"],
  directives: [ROUTER_DIRECTIVES]
})

export class NavComponent implements OnInit {
  public selectedDepartment: Department;
  public departments: Department[];

  constructor(private _departmentService: DepartmentService) {
    this.selectedDepartment = null;
  }

  ngOnInit() {
    this.getDepartments();
  }

  public getDepartments() {
    this._departmentService.getDepartments().then(departments => {
      this.departments = departments;
    });
  }

  public selectDepartment(department: Department) {
    this.selectedDepartment = department;
  }
}
