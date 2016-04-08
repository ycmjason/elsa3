import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: "elsa-timetable",
  templateUrl: "app/components/timetable/template.html",
  styleUrls: ["app/components/timetable/style.css"],
  directives: [ROUTER_DIRECTIVES]
})

export class TimetableComponent implements OnInit{
  public d;
  constructor(private _params: RouteParams) { }

  ngOnInit(){
    this.d = this._params.get('department');
  }
}
