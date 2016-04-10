function Exam(code, title, datetime){
  this.code = code;
  this.title = title;
  this.datetime = datetime;

  this.details = [];

  this.addDetail = function(key, value){
    this.details.push({
      key: key,
      value: value
    });
  }
}

module.exports = Exam;
