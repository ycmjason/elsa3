function Class(code, exams){
  this.code = code;

  this.exams = exams;

  this.addExam = function(exam){
    this.exams.push(exam);
  }
}

module.exports = Class;
