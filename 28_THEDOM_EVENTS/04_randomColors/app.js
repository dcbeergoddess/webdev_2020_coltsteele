console.log('*********************');
console.log('Random Color Exercise');
console.log('*********************');
//rgb(0-255, 0-255, 0-255)

//SELECT BUTTON
const button = document.querySelector('button');

//add event listener
button.addEventListener('click', () => {
  //generate random color - change body color
  //generate 3 random numbers from 0-255
  /*MOVED TO SEPARATE FUNCTION
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`
  */
  const newColor = makeRandColor();
  //set background color property on body
  document.body.style.backgroundColor = newColor;
  console.log(newColor)
  //update h1 text to have rbg value
  const h1 = document.querySelector('h1')
  h1.innerText = newColor

});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`
}

//EXERCISE CHANGE TEXT COLOR IF YOU GET A REALLY DARK COLOR


