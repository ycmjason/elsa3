import {Department} from '../models/Department';
import {Class} from '../models/Class';
import {Exam} from '../models/Exam';

var mocks: Department[] = [
  new Department('AE'),
  new Department('DOC'),
  new Department('ME')
];

mocks[0].addClass(new Class('a1'));
mocks[0].addClass(new Class('a2'));
mocks[0].addClass(new Class('a3'));
mocks[0].addClass(new Class('a4'));
mocks[0].getClass('a1').addExam(new Exam('exam1', 'some title', new Date(2016, 4, 10, 14, 0)));
mocks[0].getClass('a1').addExam(new Exam('exam2', 'some title', new Date(2016, 4, 11, 14, 0)));
mocks[0].getClass('a1').addExam(new Exam('exam3', 'some title', new Date(2016, 4, 13, 12, 0)));
mocks[0].getClass('a1').addExam(new Exam('exam4', 'some title', new Date(2016, 4, 15, 14, 0)));
mocks[0].getClass('a1').addExam(new Exam('exam5', 'some title', new Date(2016, 4, 16, 12, 0)));
mocks[1].addClass(new Class('j1'));
mocks[1].addClass(new Class('j2'));
mocks[1].addClass(new Class('j3'));
mocks[1].addClass(new Class('j4'));
mocks[2].addClass(new Class('m1'));
mocks[2].addClass(new Class('m2'));
mocks[2].addClass(new Class('m3'));
mocks[2].addClass(new Class('m4'));

export {mocks};
