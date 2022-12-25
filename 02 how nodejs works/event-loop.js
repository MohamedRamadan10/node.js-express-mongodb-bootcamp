"use strict";

const fs = require("fs");
const crypto = require("crypto");

setImmediate(() => console.log("Immediate 1 is finished"));
setTimeout(() => console.log("Timer 1 is finished"), 0);

const start = Date.now();

fs.readFile(`${__dirname}/test-file.txt`, "utf-8", (err) => {
   console.log("I/O is finished\n\n--------");
   setImmediate(() => console.log("Immediate 2 is finished"));
   setTimeout(() => console.log("Timer 2 is finished"), 0);
   setTimeout(() => console.log("Timer 3 is finished"), 3000);
   process.nextTick(() => console.log("NextTick is finished"));

   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
   console.log(Date.now() - start, "Password encrypted");

   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
   console.log(Date.now() - start, "Password encrypted");

   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
   console.log(Date.now() - start, "Password encrypted");

   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
   console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from top-level code");
