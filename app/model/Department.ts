import {Class} from "./Class";

export class Department{
  private classes: Class[]
  constructor(private code: string) { }
  
  public addClass(cls: Class): boolean{
    // check for class duplication
    if(this.classes.filter(({code: c}) => c==cls.getCode()).length > 0){
      console.error("Attempt to add class with code already exists");
      return false;
    }
    this.classes.push(cls);
    return true;
  }

  public getClass(code: string): Class{
    return this.classes.filter(({code: c}) => (c == code))[0];
  }
}
