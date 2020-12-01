// Q9c

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);
const id = x => x;

const eShow = method => method(fail => fail)(result => "Result is: " + result);

const x_ = Math.random();
const safeDiv = num => divisor => divisor === 0 ? Left("Cannot divide by 0") : Right(num / divisor);
document.writeln(eShow(safeDiv(1)(0)) === "Cannot divide by 0" && eShow(safeDiv(x_)(1)) === "Result is: " + x_);