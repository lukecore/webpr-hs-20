// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     isCool() {return this.name.length > 3};
// }
//
// const p = new Person ("Dierk");
// const joe = {
//     name: "joe",
//     cool: p.isCool
// };
// document.writeln(joe.cool());

// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     isCool() {return name==='Dierk'};
// }
//
// const p = new Person ("Dierk");
// document.writeln(p.isCool());

// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     isCool() {return this.name.length > 3};
// }
//
// const p = new Person ("Joe");
// p.prototype.isCool = () => true;
// document.writeln(p.isCool());
//
// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     isCool() {return this.name.length > 3};
// }
//
// const p = new Person ("Joe");
// p.isCool = () => true;
// document.writeln(p.isCool());


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool() {return this.name.length > 3};
// }
//
// const p = new Person ("Dierk");
// document.writeln(p.name === "Dierk");

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     isCool() {return this.name.length > 3};
// }
//
// const p = new Person ("Dierk");
// document.writeln(p.isCool());

class Person {
    constructor(name) {
        this.name = name;
    }
    isCool() {return this.name.length > 3};
}

const p = new Person ("Joe");
Person.prototype.isCool = () => true;
document.writeln(p.isCool());