import {Component} from "angular2/core";

@Component({
  selector: "elsa-frame",
  templateUrl: "app/components/frame/template.html",
  styleUrls: ["app/components/frame/style.css"]
})

export class FrameComponent { 
  private showing = true;
  public showhide(){
    this.showing = !this.showing;
  }
}
