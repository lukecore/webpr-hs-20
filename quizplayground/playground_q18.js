// function handle(callback){
//     const result = [];
//     callback(result);
//     return result;
// }
// let it = [];
// document.writeln(handle(it => it.push(1)).length === 1);

// function handle(callback){
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln(handle(it.push(1)).length === 1);

// function handle(callback){
//     const result = [];
//     callback([]);
//     return result;
// }
// let it = [];
// document.writeln(handle(it => it.push(1)).length === 1);

// function handle(callback){
//     const result = [];
//     return callback(result);
// }
// document.writeln(handle(()=>[1]).length === 1);

// function handle(callback){
//     const result = [];
//     callback(result);
//     return result;
// }
// let it = [];
// document.writeln(handle( it.push(1)).length === 1);
// function handle(callback){
//     return callback([]);
// }
// let it = [];
// document.writeln(handle(it => {
//     it.push(1);
//     return it;
// }).length === 1);

// function handle(callback){
//     const result = [];
//     callback(result);
//     return result;
// }
// let it = [];
// document.writeln(handle(() => it.push(1)).length === 1);

// function handle(callback){
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln(handle(() => it.push(1)).length === 1);

// function handle(count, callback) {
//     const result = [];
//     for (let i = 0; i < count; i++) {
//     callback(result)
//     }
//     return result;
// }
//
// document.writeln(handle(3,it => it.push(1)).length === 3);

// function handle(callback){
//     const result = [];
//     callback(result);
//     return result;
// }
// document.writeln(handle(() => [1]).length === 1);

// function handle(callback){
//     const result = [];
//     callback(result);
//     callback(result);
//     return result;
// }
// document.writeln(handle(it => it.push(1)).length === 2);

function handle(callback){
    const result = [];
    callback(result);
    return result;
}
document.writeln(handle(it => it.push(1)).length === 1);