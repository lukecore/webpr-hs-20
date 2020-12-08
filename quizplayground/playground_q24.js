// const idPromise = x => new Promise(resolve => resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// const foo = async i => {
//     let x = await idPromise(i);
//     x = await writer(x);
// };
// foo(1);

// const idPromise = x => new Promise(resolve => resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// const inc = n => idPromise(n + 1);
//
// const foo = async i => {
//     let x = await idPromise(i);
//     while (x < 4) {
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

// const idPromise = x => new Promise(resolve => resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
//
//
// const foo = async i => {
//     let x = await idPromise(i);
//     document.writeln(x);
// };
// foo(1);

// const idPromise = x => new Promise(resolve => resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// const inc = n => idPromise(n + 1);
// const filterEven = n => n % 2 === 0 ? idPromise(n): failPromise("not even");
//
// const foo = async i => {
//     let x = await idPromise(i);
//     while (x < 4) {
//         x= await filterEven(x);
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

// const idPromise = x => new Promise(resolve => resolve(x));
// const failPromise = err => new Promise((resolve, reject) => reject(err));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// const inc = n => idPromise(n + 1);
// const filterEven = n => n % 2 === 0 ? idPromise(n) : failPromise("not even");
//
// const foo = async i => {
//     let x = await idPromise(i);
//     while (x < 4) {
//         x = await filterEven(x).catch(err => {
//         });
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);
const idPromise = x => new Promise(resolve => resolve(x));
const failPromise = err => new Promise((resolve, reject) => reject(err));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
}

const foo = async i => {
    let x = await idPromise(i);
    x.then(writer);
};
foo(1);
