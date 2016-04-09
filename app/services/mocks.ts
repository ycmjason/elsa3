import {Department} from '../models/Department';
import {Class} from '../models/Class';
import {Exam} from '../models/Exam';

var mocks: Department[] = [
  new Department('AE', "Apple eat"),
  new Department('DOC', "Department of Computing"),
  new Department('ME', "Mach Egg")
];

mocks[0].addClass(new Class('a1'));
mocks[0].addClass(new Class('a2'));
mocks[0].addClass(new Class('a3'));
mocks[0].addClass(new Class('a4'));
let e1 = new Exam('exam1', 'some title', new Date(2016, 2, 10, 14, 0))
e1.addDetail('Room', '188');
e1.addDetail('Duration', '128');
let e2 = new Exam('exam2', 'some title2', new Date(2016, 3, 10, 12, 0))
e2.addDetail('Room', '288');
e2.addDetail('Duration', '120');
let e3 = new Exam('exam3', 'some title3', new Date(2016, 4, 13, 18, 0))
e3.addDetail('Room', '388');
e3.addDetail('Duration', '888');
let e4 = new Exam('exam4', 'some title4', new Date(2016, 8, 15, 12, 0))
e4.addDetail('Room', '490');
e4.addDetail('Duration', '88');
mocks[0].getClass('a1').addExam(e1);
mocks[0].getClass('a1').addExam(e2);
mocks[0].getClass('a1').addExam(e3);
mocks[0].getClass('a1').addExam(e4);
mocks[1].addClass(new Class('j1'));
mocks[1].addClass(new Class('j2'));
mocks[1].addClass(new Class('j3'));
mocks[1].addClass(new Class('j4'));
mocks[2].addClass(new Class('m1'));
mocks[2].addClass(new Class('m2'));
mocks[2].addClass(new Class('m3'));
mocks[2].addClass(new Class('m4'));

export {mocks};
