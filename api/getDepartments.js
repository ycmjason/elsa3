var db = require('filesys-db')();

var departments = db.getCollection('departments');

console.log(JSON.stringify(departments.documents));
