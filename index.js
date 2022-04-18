#!/usr/bin/env node

// try `custom-command -honorary Quinn` in the terminal!

const { parsedArgs } = require("./lib/parse");

const name = parsedArgs.arguments[0];
const honorary = parsedArgs.flags.honorary;

console.log(`Hello,${honorary ? " Mr. or Ms." : ""} ${name}`);