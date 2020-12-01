// Q8

// const s1 = x => y => z => x;
// const s2 = x => y => z => y;
// const s3 = x => y => z => z;
//
// const triple = x => y => z => f => f(x)(y)(z);
// const a = t => t(s1);
// const b = t => t(s2);
// const c = t => t(s3);
//
// const person = triple;
// const firstname = a;
// const lastname = b;
// const age = c;
//
// const bran = person("Brendan")("Eich")(50);
//
// document.writeln(firstname(bran) === "Brendan");

// const s1 = x => y => z => x;
// const s2 = x => y => z => y;
// const s3 = x => y => z => z;
//
// const triple = x => y => z => f => f(x)(y)(z);
// const a = t => t(s1);
// const b = t => t(s2);
// const c = t => t(s3);
//
// const person = triple;
// const firstname = a;
// const lastname = b;
// const age = c;
//
// const bran = person("Brendan");
// const raven = bran("Stark")(16);
// const eich = bran("Eich")(50);
//
// document.writeln(age(raven) === 16);

// const s1 = x => y => z => x;
// const s2 = x => y => z => y;
// const s3 = x => y => z => z;
//
// const triple = x => y => z => f => f(x)(y)(z);
// const a = t => t(s1);
// const b = t => t(s2);
// const c = t => t(s3);
//
// const oneTwoThree = triple(1)(2)(3);
// document.writeln(a(oneTwoThree)===1);

// const s1 = x => y => z => x;
// const s2 = x => y => z => y;
// const s3 = x => y => z => z;
//
// const triple = x => y => z => f => f(x)(y)(z);
// const a = t => t(s1);
// const b = t => t(s2);
// const c = t => t(s3);
//
// const person = triple;
// const firstname = a;
// const lastname = b;
// const age = c;
//
// const bran = person("Brendan");
// const raven = bran("Stark")(16);
// const eich = bran("Eich")(50);
//
// document.writeln(firstname(bran) === "Brendan");

const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const oneTwoThree = triple(1);
document.writeln(a(oneTwoThree)===1);