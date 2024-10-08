const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

// 1. Log each student’s name and grade

students.forEach((student) => console.log(student.name, student.grade));
/*const topStudents = students.filter((student) => student.grade > 80);
const youngStudents = students.filter((student) => student.age <= 21);
//topStudents.forEach((topStudent) => console.log(topStudent.name));
youngStudents.forEach((youngStudent) => console.log(youngStudent.name));*/
