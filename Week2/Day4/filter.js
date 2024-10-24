function filter(items, predicate) {
  return items.filter(predicate);
}
var students = [
  { id: 1, name: "Alice", grade: 85, age: 20, passed: true },
  { id: 2, name: "Bob", grade: 40, age: 21, passed: false },
  { id: 3, name: "Charlie", grade: 70, age: 19, passed: true },
  { id: 4, name: "David", grade: 50, age: 22, passed: false },
];
var passingStudents = filter(students, function (student) {
  return student.passed;
});
console.log("Passing Students:", passingStudents);
