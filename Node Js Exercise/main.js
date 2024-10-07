let student = {
    name: "Marie",
    age: 20,
    courses: [] };

student.age = 21;
student.grade = "A";
student.courses.push("Math", "Physics", "Chemistry");

let physicsIndex = student.courses.indexOf("Physics");

let firstTwoCourses = student.courses.slice(0, 2);

console.log("Modified student object:", student);
console.log("Index of 'Physics':", physicsIndex);
console.log("First two courses:", firstTwoCourses);