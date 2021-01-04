
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function() {
  // if (p1Score !== winningScore) {
  //   p1Score += 1;
  //   p1Display.textContent = p1Score;
  // }
  //INCORPORATE GAME OVER NOW/None of this code will run if isGameOver = true
  if (!isGameOver)  {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score
  }
})

p2Button.addEventListener('click', function() {
  if (!isGameOver)  {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score
  }
})