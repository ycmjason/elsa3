import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {mocks} from './mocks';
import {Department} from '../models/Department';
import {Class} from '../models/Class';
import {Exam} from '../models/Exam';

import 'rxjs/Rx';

@Injectable()
export class DepartmentService {
  // because departmnet detail would not be changed very often
  // and there is no point querying every single time I decided to put the query in the constructor
  private cachedDepartments;
  constructor(public http: Http) { };

  public getDepartments(): Promise<Department[]>{
    if(this.cachedDepartments){
      return new Promise<Department[]>((resolve) => {
        resolve(this.cachedDepartments)
      });
    }
    return this.fetchCache();
  }

  private fetchCache(): Promise<Department[]>{
    return new Promise<Department[]>((resolve) => {
      this.http.get('api.php?q=getDepartments')
               .map(deps => deps.json())
               .subscribe(
                 deps => {
                   deps.forEach((dep) => {
                     // reconstruct exams
                     dep.classes.forEach((cls) => {
                       cls.exams = cls.exams.map(exam => {
                         return new Exam(exam.code, exam.title, new Date(exam.datetime), exam.details);
                       });
                     });
                     // reconstruct classes
                     dep.classes = dep.classes.map(cls => new Class(cls.code, cls.exams));
                   });
                   // reconstruct departments
                   deps = deps.map(dep => new Department(dep.code, dep.title, dep.classes))
                              .sort((d1, d2) => d1.getCode() < d2.getCode()? -1: 1);
                   this.cachedDepartments = deps;
                   resolve(deps);
                 },
                 err  => console.error(err)
               );
    });
  }

  public getDepartment(depCode: string): Promise<Department>{
    return new Promise<Department>((resolve) => {
      this.getDepartments().then(deps => {
        resolve(deps.filter(dep => dep.getCode()==depCode)[0])
      });
    });
  }
}
