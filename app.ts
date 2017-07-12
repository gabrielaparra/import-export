//--------IMPORTING EVERYTHING FROM THE FILE---------

import * mathOperations from './math';

console.log( '----------POWER OF 2--------')
console.log( mathOperations.powerOf2(10) );
console.log( '--------RANDOM INTEGER--------')
console.log( mathOperations.randomInteger(40) );

//---------------------------------------------------


//-------------IMPORTING INDIVIDUALLY----------------

import { powerOf2, randomInteger } from './math'
//leave out the file extension because what will be finally
//imported is the compiled version of math.ts (math.js)

console.log( '----------POWER OF 2--------')
console.log( powerOf2(50) );
console.log( '--------RANDOM INTEGER--------')
console.log( randomInteger(1200) );

//----------------------------------------------------
