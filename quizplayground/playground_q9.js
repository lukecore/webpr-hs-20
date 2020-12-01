//Q9
// const Left = x => f => g => f(x);
// const Right = x => f => g => g(x);
// const either = e => f => g => e(f)(g);
//
// const safeDiv = num => divisor => divisor === 0 ? Left("cannot divide by 0") : Right(num / divisor);
// const result = safeDiv(1)(0);
//
// either(result)(msg => document.writeln(msg))(val => document.writeln(val === 1));

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

const safeDiv = num => divisor => divisor === 0 ? Left("cannot divide by 0") : Right(num / divisor);
const result = safeDiv(1)(0);

either(result)(msg=> document.writeln(msg))(val=> document.writeln(val === 1));