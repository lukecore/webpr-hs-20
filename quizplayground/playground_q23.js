// const idPromise = x => new Promise(resolve => resolve(x));
//
// idPromise(1)
//     .then(it => {
//         document.writeln(it);
//         return it;
//     })
//     .then(it => document.writeln(it));

// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
// const inc = n => n + 1;
// const filterEven = n => n % 2 === 0 ? n : undefined;
//
// idPromise(1)
//     .then(writer)
//     .then(inc)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)

// const idPromise = x => new Promise(resolve => resolve(x));
//
// idPromise(1)
//     .then(it => {
//         document.writeln(it);
//     })
//     .then(it => document.writeln(it));

// const idPromise = x => new Promise(resolve => resolve(x));
//
// document.writeln(idPromise(1));

// const idPromise = x => new Promise(resolve => resolve(x));
//
// idPromise(1)
//     .then(it => {
//         document.writeln(it);
//         return idPromise(it);
//     })
//     .then(it => document.writeln(it));

// const idPromise = x => new Promise(resolve => resolve(x));
//
// idPromise(1)
//     .then(it => document.writeln(it));

// const idPromise = x => new Promise(resolve => resolve(x));
//
// idPromise(1)
//     .then(it => it )
//     .then(it => document.writeln(it));

// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
// const filterEven = n => n % 2 === 0 ? n : undefined;
//
// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)

// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
// const filterEven = n => {
//     if (n % 2 === 0) return n;
//     else throw Error("not even")
// };
//
// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)
//     .catch(err => {
//     });

// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// idPromise(1)
//     .then(writer)
//     .then(it => it +1)
//     .then(writer);
//

const idPromise = x => new Promise(resolve => resolve(x));

const writer = x => {
    document.writeln(x);
    return idPromise(x);
}
const filterEven = n => {
    if (n % 2 === 0) return n;
    else throw Error("not even")
};

idPromise(1)
    .then(writer)
    .then(filterEven)
    .then(writer)
    .catch(err => {
    });

// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
// const filterEven = n => n % 2 === 0 ? n : undefined;
//
// idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer);


// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// idPromise(1)
//     .then(writer)
//     .then(it => it + 1)
//     .then(writer)

// const idPromise = x => new Promise(resolve => resolve(x));
//
// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// }
//
// idPromise(1)
//     .then(writer)
//     .then(it => document.writeln(it));