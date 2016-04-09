import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

import {DepartmentService} from "../../services/department.service";
import {ExamService} from "../../services/exam.service";

import {padZero, getDayName} from "../../utils";

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

  public currentTime= new Date().getTime();

  public getDayName = getDayName;

  public shouldHideCountdown = true;

  constructor(private _params: RouteParams,
              private _departmentService: DepartmentService,
              private _examService: ExamService) { }

  ngOnInit(){
    let depCode = this._params.get('department');
    let clsCode = this._params.get('class');

    this._departmentService.getDepartment(depCode).then((dep) => {
      this.dep = dep;
      this.cls = this.dep.getClass(clsCode);
    });

    this._examService.getExams(depCode, clsCode).then((exams) => {
      this.exams = exams;
    });

    // for scary countdown
    setInterval(() => {
      setTimeout(() => {
        this.shouldHideCountdown = true;
      }, 900);
      this.shouldHideCountdown = false;
      this.currentTime = new Date().getTime()
    }, 1000);
  }

  public getDetailKeys(){
    if(this.exams.length <= 0) return [];
    return this.exams[0].getDetails().map(detail => detail.key);
  }

  public showCountdown(time){
    var toDays = function(){
      return Math.floor(toHours()/24);
    }
    var toHours = function(){
      return Math.floor(toMinutes()/60);
    }
    var toMinutes = function(){
      return Math.floor(toSeconds()/60);
    }
    var toSeconds = function(){
      return Math.floor(time/1000);
    }

    var getDays = toDays;
    var getHours24 = function(){
      return padZero(toHours()%24, 2);
    }
    var getMinutes60 = function(){
      return padZero(toMinutes()%60, 2);
    }
    var getSeconds60 = function(){
      return padZero(toSeconds()%60, 2);
    }
    var getMilliseconds = function(){
      return time;
    }

    if(time <= 0){
      return "Let it go!";
    }else if(getDays() > 1){
      return getDays()+" days "+ getHours24()+ " hrs";
    }else{
      return getHours24()+":"+getMinutes60()+":"+getSeconds60();
    }
  }
}
