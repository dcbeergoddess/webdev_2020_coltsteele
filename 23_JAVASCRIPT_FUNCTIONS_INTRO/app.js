//dice roll
/*
let die1 = Math.floor(Math.random() * 6) + 1
let die2 = Math.floor(Math.random() * 6) + 1
let die3 = Math.floor(Math.random() * 6) + 1
let die4 = Math.floor(Math.random() * 6) + 1
let die5 = Math.floor(Math.random() * 6) + 1
let die6 = Math.floor(Math.random() * 6) + 1
let die7 = Math.floor(Math.random() * 6) + 1

console.log(die1)
console.log(die2)
console.log(die3)
console.log(die4)
console.log(die5)
console.log(die6)
console.log(die7)
*/

// WRITING DRY CODE
//rollDie could accept an argument for how many sides the dice has (i.e DandD)
/*
let die1 = rollDie(6);
let die2 = rollDie(20);
let die3 = rollDie(12);
let die4 = rollDie();
let die5 = rollDie();
*/

//FUNCTIONS!!!!!
//camelCase

//DEFINE FUNCTION
function singSong() {
  console.log("DO")
  console.log("RE")
  console.log("ME")
}

//RUN FUNCTION
singSong();

//Arguments


function greet(name) {
  console.log(`Hi, ${name}`)
}

greet('Anya'); //returns "Hi, Anya"
greet(); //returns "Hi, undefined" //Can give it a default value
//what we pass in "name" is a 'parameter' : placeholder : The value in the function definition that we use

//Multiple arguments 

function greetFull(firstName, lastName) {
  console.log(`Hi, ${firstName} ${lastName[0]}.`) 

}

greetFull("Colt", "Steele")


//print string n number of times
//with loop  //NOT REPEAT BUILT IN METHOD
function repeat(str, numTimes){
  let result = '';
  for(let i = 0; i < numTimes; i++){
    result += str
  }
  console.log(result)
}

repeat("hi", 5)


function add(x,y){
  //USING TYPEOF TO CHECK VALID INPUTS
  if(typeof x !== 'number' || typeof y !== 'number'){
    return false
  }
  let sum = x + y
  console.log(sum)
  return sum;
}

add(9,4);

let total = add(9,4);


//EXERCISE
//return last item in array
//return null if empty array is passed in as argument 
function lastElement(arr){
  let lastItem = arr[arr.length - 1]
  if(lastItem){
    return lastItem
} else if(!lastItem) {
  return null
}
}

console.log(lastElement([1,2,3]))
console.log(lastElement([]))

//Exercise Capitalize first letter
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize("dog"))

//Return sum of array of numbers
function sumArray(arr){
  //looked up the reduce() - from MDN DOCS AND STACK-OVERFLOW
  //Index start at 0 not needed but this the syntax for it
  return arr.reduce((a, b) => a + b, 0)
}

console.log(sumArray([1,2,3,4]))

//Return days of week, 1-7, 1: Monday...
//if num > 7 or num < 1 return null

const days = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
}

function returnDay(num){
  if(num < 1 || num > 7){
    return null
  } else {
    return days[num];
  }
} 

console.log(returnDay(0))
console.log(returnDay(1))
console.log(returnDay(2))
console.log(returnDay(3))
console.log(returnDay(4))
console.log(returnDay(5))
console.log(returnDay(6))
console.log(returnDay(7))
console.log(returnDay(8))
