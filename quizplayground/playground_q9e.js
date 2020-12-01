

const divides = x => y => y % x === 0;

document.writeln([1,2,3,4,5,6].filter(divides(3)).toString() === "3,6");