// ASSIGNMENT 1
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

// Part 1
// 1. Log each student’s name and grade
students.forEach((student) => console.log(student.name, student.grade));

// Part 2
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

// Part 3
students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));

students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log(student.name));
