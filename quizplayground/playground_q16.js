// class Person {
//
// }
//
// const p = {};
// Object.setPrototypeOf(p, Person.prototype);
// document.writeln(p instanceof Person);
//
// class Person {}
// class Student {}
// const s = new Student();
// Object.setPrototypeOf(s, Student.prototype);
// document.writeln(s instanceof Person);

// class Person {}
// class Student extends Person {}
// const s = new Student();
// document.writeln(s instanceof Person);


// class Person {}
// const p = {};
// Object.setPrototypeOf(p, Person);
// document.writeln(p instanceof Person);

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool(){return this.name.length > 3};
// }
// const p = new Person("Dierk")
// document.writeln(p instanceof Person);

// class Person {}
// class Student extends Person {}
// const s = new Student();
// Object.setPrototypeOf(s, Student.prototype);
// document.writeln(s instanceof Person);
//
// class Person {}
// class Student {}
// const s = new Student();
// Object.setPrototypeOf(s, Person.prototype);
// document.writeln(s instanceof Student);
//
// class Person {}
// class Student extends Person {}
// const s = new Student();
// document.writeln(s instanceof Student);

// class Person {}
// class Student {}
// const s = new Student();
// Object.setPrototypeOf(Student.prototype, Person.prototype);
// document.writeln(s instanceof Person);

class Person {}
class Student {}
const s = new Student();
Object.setPrototypeOf(Student, Person);
document.writeln(s instanceof Person);