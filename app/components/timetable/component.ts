import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

import {DepartmentService} from "../../services/department.service";
import {ExamService} from "../../services/exam.service";

@Component({
  selector: "elsa-timetable",
  templateUrl: "app/components/timetable/template.html",
  styleUrls: ["app/components/timetable/style.css"],
  directives: [ROUTER_DIRECTIVES]
})

export class TimetableComponent implements OnInit{
  public dep;
  public cls;

  public exams;

  constructor(private _params: RouteParams,
              private _departmentService: DepartmentService,
              private _examService: ExamService) { }

  ngOnInit(){
    // TODO
    let depCode = this._params.get('department');
    let clsCode = this._params.get('class');

    this._examService.getExams(depCode, clsCode).then((exams) => {
      this.exams = exams;
    });
  }
}
