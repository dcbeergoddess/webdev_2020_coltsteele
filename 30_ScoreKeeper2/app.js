
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 3;

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
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
    }
    p1Display.textContent = p1Score
  }
})

p2Button.addEventListener('click', function() {
  if (!isGameOver)  {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
    }
    p2Display.textContent = p2Score
  }
})

// When i tried to us an arrow function parseInt would not work. came up as Nan for winningScore when selected anything other than the hard coded 3
winningScoreSelect.addEventListener('change', function() {
  // this represents the specific object we are listening on
  //Need to turn into integer/number instead of string
  winningScore = parseInt(this.value)
}) 

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
}