import {Injectable} from 'angular2/core';
import {Department} from '../model/Department';

let mocks = [
  new Department('AE'),
  new Department('DOC')
];

@Injectable()
export class DepartmentService {
  public getDepartments(): Promise<Department[]>{
    return new Promise<Department[]>(resolve => {
      setTimeout(() => resolve(mocks), 500)
    });
  }
}
