"use strict";
exports.__esModule = true;
function powerOf2(x) {
    if (x === void 0) { x = 0; }
    //powerOf2 receives an arg of 'x' which has to be a number
    //defaults to '0', AND it must RETURN a number
    return Math.pow(x, 2);
}
exports.powerOf2 = powerOf2;
function randomInteger(max) {
    if (max === void 0) { max = 100; }
    //randomInteger takes an arg 'max' which has to be a number,
    //defaults to '100' and it must RETURN a number
    return Math.floor(Math.random() * max);
}
exports.randomInteger = randomInteger;
