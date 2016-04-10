#!/usr/bin/env node
/* ./insert_dep doc.txt
 * argv[0]: ./insert_dep
 * argv[1]: doc.txt */

/* file structure of the input file:
 * depCode|depTitle|classCode
 * Code|Title|Date|Time|[Other details...] 
 * [data]|[data]|...*/

// Pre: filesys-db has department collection already.

if(process.argv.length < 3) throw "Provided arg not enough.";

var fs = require('fs');

var db = require('filesys-db')();

var departments = db.getCollection('departments');

var Department = require('./Department');
var Class = require('./Class');
var Exam = require('./Exam');

var filePath = process.argv[2];
var clsFile = fs.readFileSync(filePath, 'utf-8');
var lines = clsFile.split('\n').filter(l=>l.trim()!='').map(l=>l.split('|'));

// check consistancy of the file
checkValid(lines)

var depCode  = lines[0][0];
var depTitle = lines[0][1];
departments.findOne({code: depCode}, (d) => {
  var detailKeys = lines[1];
  var exams = [];
  for(var i = 2; i < lines.length; i++){
    var datetime = new Date(lines[i][2]+' '+lines[i][3]);
    datetime.setYear(2016)
    var exam = new Exam(lines[i][0], lines[i][1], datetime)
    for (var j = 4; j < detailKeys.length; j++) {
      exam.addDetail(detailKeys[j], lines[i][j]);
    }
    exams.push(exam);
  }

  var clsCode = lines[0][2];
  var cls = new Class(clsCode, exams);

  dep = new Department(d? d.code: depCode,
                       d? d.title: depTitle,
                       d? d.classes: []);

  dep.removeClass(cls.code);
  dep.addClass(cls);

  reinsert({code: depCode}, dep, () => console.log(JSON.stringify(departments)));
});



//console.log(dep);

function checkValid(lines){
/* lines structure:
 * [ [ 'DoC', 'Department Of Computing', 'C1' ],
 *   [ 'Exam', 'Title', 'Date', 'Time', 'Duration', 'Room', 'Size' ],
 *   [ 'C113=MC113',
 *     'Architecture',
 *     '27-Apr',
 *     '10:00',
 *     '80',
 *     '219',
 *     '167' ],
 *   [ 'C130', 'Databases', '29-Apr', '10:00', '80', '219', '128' ]...
 * ] */
  if(lines[0].length != 3) throw "Error on first line of input file.";
  if(lines[1].length <  4) throw "Error on second line of input file.";
  for(var i = 2; i < lines.length; i++){
    if(lines[i].length != lines[1].length){
      throw "Error on " + i + "th line of input file.";
    }
  }
}

function reinsert(query, doc, cb){
  departments.remove(query, () => {
    departments.put(doc, cb);
  });
}
