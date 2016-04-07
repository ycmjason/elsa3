import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

import {HeaderComponent} from "./header.component";
import {WelcomeComponent} from "./welcome.component";
import {NavComponent} from "./nav.component";
import {TimetableComponent} from "./timetable.component";
// import {FooterComponent} from "./footer.component";

import {DepartmentService} from "./services/department.service";

@Component({
  selector: "elsa-app",
  template: `
  <elsa-header></elsa-header>
  <div class="container">
    <elsa-nav></elsa-nav>
  <router-outlet></router-outlet>
  </div>
  `,
//  <elsa-footer></elsa-footer>
//  `,
  directives: [
    HeaderComponent,
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
    path: "/",
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

export class AppComponent { }
