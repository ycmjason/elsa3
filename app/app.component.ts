import {Component} from "angular2/core";
import {CoreComponent} from "./core.component";

@Component({
    selector: "elsa-app",
    template: "<elsa-core></elsa-core>",
    directives: [CoreComponent]
})

export class AppComponent { }
