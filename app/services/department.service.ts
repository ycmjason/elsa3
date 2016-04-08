import {Injectable} from 'angular2/core';
import {Department} from '../models/Department';
import {Class} from '../models/Class';


@Injectable()
export class DepartmentService {
  public getDepartments(): Promise<Department[]>{
    let mocks = [
      new Department('AE'),
      new Department('DOC')
    ];

    mocks[0].addClass(new Class('a1'));
    mocks[0].addClass(new Class('a2'));
    mocks[0].addClass(new Class('a3'));
    mocks[0].addClass(new Class('a4'));
    mocks[1].addClass(new Class('j1'));
    mocks[1].addClass(new Class('j2'));
    mocks[1].addClass(new Class('j3'));
    mocks[1].addClass(new Class('j4'));
    return new Promise<Department[]>(resolve => {
      setTimeout(() => resolve(mocks), 500)
    });
  }
}
