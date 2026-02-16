const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b) => a*b;
const sq = (a) => a*a;
const pi = 3.14;

const obj = {
    add: add,
    sub: sub,
    mult: mult,
    sq: sq,
    pi: pi
}

// this is object used to define what a module exports
module.exports = obj; 