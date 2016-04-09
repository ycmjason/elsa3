import {Injectable} from 'angular2/core';
import {mocks} from './mocks';
import {Department} from '../models/Department';
import {Class} from '../models/Class';
import {Exam} from '../models/Exam';

@Injectable()
export class DepartmentService {
  // because departmnet detail would not be changed very often
  // and there is no point querying every single time I decided to put the query in the constructor
  private cachedDepartments;

  public getDepartments(): Promise<Department[]>{
    if(this.cachedDepartments){
      return new Promise<Department[]>((resolve) => {
        resolve(this.cachedDepartments)
      });
    }
    return this.fetchCache();
  }

  private fetchCache(): Promise<Department[]>{
    return new Promise<Department[]>((resolve) => setTimeout(() => {
      this.cachedDepartments = mocks
      resolve(mocks);
    }, 500));
  }

  public getDepartment(depCode: string): Promise<Department>{
    return new Promise<Department>((resolve) => {
      this.getDepartments().then(deps => {
        resolve(deps.filter(dep => dep.getCode()==depCode)[0])
      });
    });
  }
}
