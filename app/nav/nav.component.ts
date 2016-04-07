import {Component, OnInit} from "angular2/core";
import {Department} from "./model/Department";
import {DepartmentService} from "./services/department.service";

@Component({
  selector: "elsa-nav",
  templateUrl: "public/nav/template.html",
  styleUrls: ["public/nav/style.css"]
})

export class NavComponent implements OnInit {
  public departments: Department[];
  ngOnInit() {
    this.getDepartments();
  }

  constructor(private _departmentService: DepartmentService) { }

  public getDepartments() {
    this._departmentService.getDepartments().then(departments => {
      this.departments = departments;
    });
  }

  public selectDepartment(department: Department) {
  }
}
