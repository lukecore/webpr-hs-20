const inc    = x => x + 1;
const double = x => x * 2;

Function.prototype.then = function (a) {
    return b => a(this(b));
};


document.writeln( inc.then(double).then(double) (1) === 8)