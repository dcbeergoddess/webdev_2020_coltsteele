const multiply = (x, y) => x * y;
  
const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log("BEFORE");
isRightTriangle(3, 4, 5); //Drop in Console

console.log("DONEEEEE!!!");
