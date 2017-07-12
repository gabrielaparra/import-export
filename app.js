"use strict";
//--------IMPORTING EVERYTHING FROM THE FILE---------
exports.__esModule = true;
var mathOperations = require("./math");
console.log('----------POWER OF 2--------');
console.log(mathOperations.powerOf2(10));
console.log('--------RANDOM INTEGER--------');
console.log(mathOperations.randomInteger(40));
//---------------------------------------------------
//-------------IMPORTING INDIVIDUALLY----------------
var math_1 = require("./math");
//leave out the file extension because what will be finally
//imported is the compiled version of math.ts (math.js)
console.log('----------POWER OF 2--------');
console.log(math_1.powerOf2(50));
console.log('--------RANDOM INTEGER--------');
console.log(math_1.randomInteger(1200));
//----------------------------------------------------
