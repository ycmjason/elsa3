#!/usr/bin/env node
var db = require('filesys-db')();

db.dropCollection('departments');
db.createCollection('departments');
