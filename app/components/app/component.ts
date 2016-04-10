import {Component} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

import {HeaderComponent} from "../header/component";
import {FrameComponent} from "../frame/component";
import {WelcomeComponent} from "../welcome/component";
import {NavComponent} from "../nav/component";
import {TimetableComponent} from "../timetable/component";
// import {FooterComponent} from "./footer.component";

import {DepartmentService} from "../../services/department.service";

@Component({
  selector: "elsa-app",
  templateUrl: "app/components/app/template.html",
  directives: [
    HeaderComponent,
    FrameComponent,
    NavComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    DepartmentService
  ]
})

@RouteConfig([
  {
    path: "/welcome",
    name: "Welcome",
    component: WelcomeComponent,
    useAsDefault: true
  },
  {
    path: "/timetable/:department/:class",
    name: "Timetable",
    component: TimetableComponent
  }
])

export class AppComponent{
  constructor(private _router: Router) {
    /* for easier debuggin, coz apache will refer non-recognized links to index.php
     * so angular 2 should check if path exists */
    var path = window.location.pathname.replace('/~cmy14/elsa3', '');
    this._router.recognize(path).then((recognized) => {
      if(!recognized){
        console.error('Path not recognised by router: ' + path);
        document.write("404");
      }
    });
  }
}
