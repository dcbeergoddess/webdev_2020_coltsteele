//EXPORT RIGHT AWAY

module.exports.add = (x,y) => x + y;
module.exports.PI = 3.14159;
module.exports.square = x => x * x;



const add = (x,y) => x + y;

const PI = 3.14159;

const square = x => x * x;

/*
//============SHORTCUT=============//
exports.add = (x,y) => x + y;
exports.PI = 3.14159;
exports.square = x => x * x;
//================================//
*/

// EXPORT EVERY OBJECT
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//CREATE MATH OBJECT TO EXPORT////

const math = {
  add: add,
  PI: PI,
  square: square
};

module.exports = math;
