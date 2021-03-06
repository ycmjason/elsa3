import {Class} from "./Class";

export class Department{
  private classes: Class[]
  constructor(private code: string, private title: string, classes?: Class[]) {
    this.classes = classes || [];
  }

  private sortClasses() {
    this.classes = this.classes.sort((c1, c2) => (c1.getCode() < c2.getCode())? -1: 1);
  }

  public getCode(): string{
    return this.code;
  }

  public getTitle(): string{
    return this.title;
  }

  public getClasses(): Class[]{
    return this.classes;
  }
  
  public getClass(code: string): Class{
    return this.classes.filter(({code: c}) => (c == code))[0];
  }

  public addClass(cls: Class): boolean{
    // check for class duplication
    if(this.classes.filter(({code: c}) => c==cls.getCode()).length > 0){
      console.error("Attempt to add class with code already exists");
      return false;
    }
    this.classes.push(cls);
    this.sortClasses();
    return true;
  }

}
