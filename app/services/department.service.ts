import {Injectable} from 'angular2/core';
import {mocks} from './mocks';
import {Department} from '../models/Department';
import {Class} from '../models/Class';
import {Exam} from '../models/Exam';

@Injectable()
export class DepartmentService {
  // because departmnet detail would not be changed very often
  // and there is no point querying every single time I decided to put the query in the constructor
  public getDepartments(): Promise<Department[]>{
    return new Promise<Department[]>(resolve => setTimeout(() => resolve(mocks), 500));
  }
}
