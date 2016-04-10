function Department(code, title, classes) {
  this.code = code;
  this.title = title;

  this.classes = classes;

  this.addClass = function(cls){
    this.classes.push(cls);
  };

  this.removeClass = function(clsCode){
    this.classes = this.classes.filter((cls) => cls.code!=clsCode);
  };
}

module.exports = Department;
