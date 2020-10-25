// const add = function(x, y){
//   return x + y;
// }

//USE ARROW FUNCTION
const add = (x, y) => {
  return x + y;
}

console.log(add(9,4))

console.log('*******DICE ROLL******')
const rollDie = () => {
  return console.log(Math.floor(Math.random() * 6) + 1)
}

rollDie();
rollDie();

console.log('*******ONE PARAMETER******')
const square = x => {
  return x * x;
}

console.log(square(2))

console.log('*******IMPLICIT RETURNS******')
console.log('*******DICE ROLL******')
const rollDie2 = () => ( //parens not brackets for implicit return
  console.log(Math.floor(Math.random() * 6) + 1)
)

rollDie2();
rollDie2();

console.log('*******ONE LINE SUM******')
const add2 = (a, b) => a + b;

console.log(add2(1, 2))

