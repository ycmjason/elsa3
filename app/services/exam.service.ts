import {Injectable} from 'angular2/core';
import {mocks} from './mocks';
import {Department} from '../models/Department';
import {Class} from '../models/Class';
import {Exam} from '../models/Exam';

@Injectable()
export class ExamService {
  public getExams(depCode:string, clsCode: string): Promise<Exam[]>{
    return new Promise<Exam[]>(resolve => setTimeout(() => {
      let exams = mocks.filter(dep => dep.getCode() == depCode)[0].getClasses()
                       .filter(cls => cls.getCode()==clsCode)[0].getExams();
      resolve(exams);
    }, 500));
  }
}
