const p1Btn = document.querySelector('#player1');
const p2Btn = document.querySelector('#player2');
const resetBtn = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#winScore');

const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');

//SET SCORES TO 0 AT FIRST AND THEN WE UPDATE
let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGameOver = false;

// const updateScore = (score, display) => {
//   if(!isGameOver){
//     score += 1;
//     if(score === winScore) {
//       isGameOver = true;
//     }
//     display.textContent = ;
//   }
// };

p1Btn.addEventListener('click', () => {
  //take current score and add to score
  // updateScore(p1Score, p1Display);
  if(!isGameOver){
    p1Score += 1;
    if(p1Score === winScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener('click', () => {
  //take current score and add to score
  // updateScore(p1Score, p1Display);
  if(!isGameOver){
    p2Score += 1;
    if(p2Score === winScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

winScoreSelect.addEventListener('change', () => {
  winScore = parseInt(this.value);
  console.log(winScore);
  reset();
})

resetBtn.addEventListener('click', reset); //don't execute reset

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}