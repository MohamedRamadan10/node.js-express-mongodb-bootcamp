"use strict";

console.log(arguments);
console.log(require("module").wrapper);

// module.exports
const Calc = require("./test-module-1");
const c = new Calc();
console.log(c.add(2, 5));
console.log(c.divide(10, 2));
console.log(c.minus(10, 2));

// exports
const c2 = require("./test-module-2");
console.log(c2.add(2, 5));
console.log(c2.divide(10, 2));
console.log(c2.minus(10, 2));

// destructing
const { add, divide } = require("./test-module-2");
console.log(add(2, 5));
console.log(divide(10, 2));

// caching
require('./test-module-3')()