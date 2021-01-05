const list = ['a', 'bb', 'ccc', 'dddd'];
const result = list.splice(0, 0, 'x', 'y');

document.writeln(list[0] === 'a' && list[1] === 'x' && list[2] === 'y' && list[3] === 'bb');