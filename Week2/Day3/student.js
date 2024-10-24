"use strict";
class ManageStudent {
  constructor() {
    this.students = []; // Array to store multiple students
  }
  // Method to add a student
  addStudent(student) {
    this.students.push(student);
  }
  // Getter to retrieve all students
  get allStudents() {
    return this.students;
  }
  // Method to find a student by ID
  getStudentById(id) {
    return this.students.find((student) => student.id === id);
  }
}
const manager = new ManageStudent();
// Adding students
manager.addStudent({ id: 1, name: "Alice", age: 21, scores: [85, 90, 88] }); // Use 'scores' here
manager.addStudent({ id: 2, name: "Bob", age: 23, scores: [80, 85, 89] }); // Use 'scores' here
// Retrieving all students
console.log(manager.allStudents);
console.log(manager.getStudentById(2));
