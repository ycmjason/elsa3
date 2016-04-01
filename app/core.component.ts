import {Component} from "angular2/core";
import {HeaderCoreComponent} from "./core.header.component";
import {FilterComponent} from "./filter.component";

@Component({
    selector: "elsa-core",
    templateUrl: "public/core/template.html",
    directives: [HeaderCoreComponent, FilterComponent]
})

export class CoreComponent { }
