const NullSafe = x => {
    const isNullSafe = y => y && y.then;
    const maywrap = y => NullSafe(y); // if y is not NullSafe yet, make it so
    return {
        then: fn => {
            if (!x) {
                return;
            }
            if (isNullSafe(fn(x))) {
                return fn(x);
            } else {
                return maywrap(fn(x))
            }
        }// see(1)
    }
};


const x_ = 4;
let y_ = 2;
document.writeln(NullSafe(x_)
    .then(x => x * 2)          // must auto-promote
    .then(x => NullSafe(x))  // must not auto-promote
    .then(x => y_ = x + 1)   // store value, check no double promotion
    .then(x => null)         // jump over rest
    .then(x => x.mustNotBeCalled) !== null && y_ === x_ * 2 + 1);