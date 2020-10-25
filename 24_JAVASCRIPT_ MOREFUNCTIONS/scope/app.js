/*
function collectEggs(){
  let totalEggs = 6;
  console.log(totalEggs)
}

collectEggs()
console.log(totalEggs) ///ERROR NOT DEFINED
*/

let totalEggs = 0;

function collectEggs(){
  totalEggs = 6;
  console.log(totalEggs)
}

console.log(totalEggs) //0
collectEggs() //6
console.log(totalEggs) //6



// ANOTHER EXAMPLE
// Can use CONST because in different SCOPES
const bird = 'Scarlet Macaw';
function birdWatch(){
  const bird = 'Great Blue Heron';
  console.log(bird)
}

console.log(bird) //'Scarlet Macaw'
birdWatch() //'Great Blue Heron'
console.log(bird) //'Scarlet Macaw'
//bird is scoped to birdWatch function
//will find closet reference to variable to print


//BLOCK SCOPE
let radius = 8;
if(radius > 0){
  const PI = 3.14159
  let msg = 'HIII!'
}

console.log(radius);
// console.log(PI); //ERROR PI NOT DEFINED //SCOPED TO THAT BLOCK

for(let i = 0; i < 5; i++){
  let msg = "ASDFASDFASDF"
  console.log(msg);
}

// console.log(msg); //ERROR NOT DEFINED

//=========LEXICAL SCOPE============================//
function bankRobbery(){
  const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];

  function cryForHelp(){
    for(let hero of heroes){
      console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
    }
  }
  cryForHelp(); //need to call this for bankRobeery function to work
}

bankRobbery();