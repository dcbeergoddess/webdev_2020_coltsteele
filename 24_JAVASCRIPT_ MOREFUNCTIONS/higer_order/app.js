//HIGHER ORDER FUNCTIONS 
function callTwice(func){
  func();
  func();
}

function callTenTimes(f) {
  for(let i = 0; i < 10; i++){
    f();
  }
}

function rollDie(){
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll)
}

callTwice(rollDie);
console.log('*********************')
callTenTimes(rollDie);

//RETURN FUNCTIONS as VALUES

function makeMysteryFunc(){
  const rand = Math.random();
  console.log(rand)
  if(rand > 0.5){
    return function() {
      console.log("CONGRATS! I AM A GOOD FUNCTION");
    } 
    } else {
      return function(){
        alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
        alert("STOP TRYING TO CLOSE THIS WINDOW")
    }
  }
}

const mystery = makeMysteryFunc();

function makeBetweenFunc(min, max){
  return function(num){
    return num >= min && num <+ max
  }

}

const isChild = makeBetweenFunc(0, 18)
const isAdult = makeBetweenFunc(19, 64)
const isSenior = makeBetweenFunc(65, 120)

console.log(isChild(20))
console.log(isAdult(20))
console.log(isSenior(20))



console.log(makeBetweenFunc(50, 100)) //test if value is between 50 and 100

function isBetween(num){
  return num >= 50 && num <= 100; //verify if value between 50 and 100 
}

