const list = ['a', 'bb', 'ccc', 'dddd'];
const result = list.reduce((count, str) => count++, 0);

document.writeln(result === list.length);