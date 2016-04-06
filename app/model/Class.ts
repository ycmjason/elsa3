import {Exam} from "./Exam";

export class Class{
  exams: Exam[] 
  constructor(private code: string) { }

  public getCode(): string{
    return this.code;
  }

  private getExam(code: string): Exam{
    return this.exams.filter(({code: c}) => (c == code))[0];
  }

  private addExam(exam: Exam): boolean {
    // check for class duplication
    if(this.exams.filter(({code: c}) => (c == exam.getCode())).length > 0){
      console.error("Attempt to add exam with code already exists");
      return false;
    }
    this.exams.push(exam);
    return true;
  }
}
