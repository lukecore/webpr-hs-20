const join = joinSign => (acc,cur) => acc + joinSign + cur;

document.writeln([1,2,3].reduce(join('-'))=== '1-2-3');