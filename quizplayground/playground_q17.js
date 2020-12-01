// function Todo(text){
//     let done = false;
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: check = true
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

// function Todo(text){
//     let done = false;
//     const check = () => this.done = true;
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: check
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

// function Todo(text){
//     let done = false;
//     const check = () => done = true;
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: check
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

// function Todo(text) {
//     let done = false;
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: () => done = true
//     }
// }
//
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

// function Todo(text,done){
//     const check = () => done = true;
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: check
//     }
// }
// let todo = Todo("buy milk", false);
// todo.check();
// document.writeln(todo.isDone());

// function Todo(text, done) {
//     function check() {
//         done = true
//     }
//
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: check
//     }
// }
//
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

// function Todo(text){
//     let done = false;
//     const check = () => done = true;
//     return {
//         getText: () => text,
//         isDone: () => done,
//         check: check
//     }
// }
// let todo = Todo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

function Todo(text){
    let done = false;
    return {
        getText: () => text,
        isDone: () => done,
        check: ()=> done = true
    }
}
let todo = Todo("buy milk");
todo.check();
document.writeln(todo.isDone());