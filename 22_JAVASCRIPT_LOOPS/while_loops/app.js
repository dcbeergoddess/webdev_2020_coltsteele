//NORMALLY WOULD USE FOR LOOP FOR THIS
/*
let count = 0
while(count <= 10){
  console.log(count);
  count++;
}
*/
//GAME MOVES
/*
while(!gameOver){
  //player 1 move
  //player 2 move
}
*/

//AS USER FOR PASSWORD/SECRET CODE
/*
const SECRET = "BabyHippo";

let guess = prompt('enter the secret code...');
while(guess !== SECRET) {
  guess = prompt('enter the secret code...')
} 
console.log("Congrats You Got the SECRET!!!")//THIS WILL ONLY RUN AFTER SECRET CODE IS GUESSED
*/

///==================///
///THE BREAK KEYWORD///
///================///
/*
let input = prompt('Hey, say something');
while(true){
  input = prompt(input);
  if(input === 'stop copying me') break;
}
console.log('ok you win');
*/

///FOR LOOP BREAK
// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

///===============///
///GUESSING GAME==///
///==============///

//ASK USER TO ENTER IN MAXIMUM NUMBER
//parse user input into integer
let maximum = parseInt(prompt("Enter the Maximum Number!"));
//MAKE SURE YOU GET VALID MAX THAT IS A NUMBER
while(!maximum){ //IF FALSY keep asking
  maximum = parseInt(prompt("Enter the Maximum Number!"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
//KEEP TRACK OF ATTEMPTS
let attempts = 1;

while(parseInt(guess) !== targetNum){
  //CAN QUIT AT ANY TIME
  if (guess === 'q') break;
  //ADD TO ATTEMPTS
  attempts++;
  if(guess > targetNum){
    guess = prompt("TOO HIGH! Enter a new guess:");
  } else {
    guess = prompt("TOO LOW! Enter a new guess");
  }
};
  //MESSAGE IF USER QUITS
  if(guess === 'q'){
    console.log('ok you quit');
  } else {
    console.log('Congrats you win!')
    console.log(`YOU GOT IT! It took you ${attempts} guesses`)
  }






