var Grade;
(function (Grade) {
  Grade["freshman"] = "freshman";
  Grade["sophomore"] = "sophomore";
  Grade["junior"] = "junior";
  Grade["senior"] = "senior";
})(Grade || (Grade = {}));
var Student = /** @class */ (function () {
  function Student(name, age, yearOfAdmission) {
    this.name = name;
    this.age = age;
    this.yearOfAdmission = yearOfAdmission;
    var currentYear = new Date().getFullYear();
    // console.log(currentYear)
    var yearsSinceAdmission = currentYear - this.yearOfAdmission;
    if (yearsSinceAdmission < 1) {
      this.gradelevel = Grade.freshman;
    } else if (yearsSinceAdmission === 1) {
      this.gradelevel = Grade.sophomore;
    } else if (yearsSinceAdmission === 2) {
      this.gradelevel = Grade.junior;
    } else {
      this.gradelevel = Grade.senior;
    }
  }
  Student.prototype.displayInfo = function () {
    return "Name: "
      .concat(this.name, ", Age: ")
      .concat(this.age, ", Year of Admission: ")
      .concat(this.yearOfAdmission, ", Grade Level: ")
      .concat(Grade[this.gradelevel]);
  };
  return Student;
})();
var student1 = new Student("Alice", 18, 2024);
var student2 = new Student("Bob", 20, 2022);
var student3 = new Student("Charlie", 21, 2021);
var student4 = new Student("Diana", 22, 2020);
console.log(student2.displayInfo());
console.log(student3.displayInfo());
console.log(student4.displayInfo());
