import {Exam} from "./Exam";

export class Class{
  private exams: Exam[] 
  constructor(private code: string) {
    this.exams = [];
  }

  public getCode(): string{
    return this.code;
  }

  public getExams(): Exam[]{
    return this.exams;
  }

  public getExam(code: string): Exam{
    return this.exams.filter(({code: c}) => (c == code))[0];
  }

  public addExam(exam: Exam): boolean {
    // check for class duplication
    if(this.exams.filter(({code: c}) => (c == exam.getCode())).length > 0){
      console.error("Attempt to add exam with code already exists");
      return false;
    }
    this.exams.push(exam);
    return true;
  }
}
