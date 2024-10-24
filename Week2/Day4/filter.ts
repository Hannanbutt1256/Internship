interface Student {
  id: number;
  name: string;
  grade: number;
  age: number;
  passed: boolean;
}

function filter<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

const students: Student[] = [
  { id: 1, name: "Alice", grade: 85, age: 20, passed: true },
  { id: 2, name: "Bob", grade: 40, age: 21, passed: false },
  { id: 3, name: "Charlie", grade: 70, age: 19, passed: true },
  { id: 4, name: "David", grade: 50, age: 22, passed: false },
];

const passingStudents = filter(students, (student) => student.passed);

console.log("Passing Students:", passingStudents);
