//==========OLD WAY FOR DEFAULT PARAMS==============//
function rollDie(numSides) {
   //DEFAULT PARAM IF NOTHING PASSED IN
  if(numSides === undefined){
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(20))
console.log(rollDie(6))
console.log(rollDie())

//=============NEWER WAY======================//

function rollDie2(numSides = 6){
  return Math.floor(Math.random() * numSides) + 1
}
console.log('*****NEWER DEFAULT PARAM*********')
console.log(rollDie2(20))
console.log(rollDie2(6))
console.log(rollDie2())

//need to put default parameters after non default parameters
function greet(msg = 'hey there', person){
  console.log(`${msg}, ${person}`);
}

greet('up top', 'joan')
console.log('***ORDER OF DEFAULT PARAMS MATTER*****')
greet('joan') //does not work, applied to first parameter, order matters, 

//need to put default parameters after non default parameters
function greet(person, msg = 'hey there', punc = '!'){
  console.log(`${msg}${punc} ${person}`);
}
console.log('******BETTER ORDER******')
greet('joan', 'up top','?')
greet('joan')
greet('joan', 'hello')
