const inc    = x => x + 1;
const double = x => x * 2;


document.writeln( inc.then(double).then(double) (1) ==o= 8)