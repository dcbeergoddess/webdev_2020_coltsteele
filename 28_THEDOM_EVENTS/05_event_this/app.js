//GENERATE RANDOM COLOR FUNCTION
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b}` 
}

//SELECT ALL BUTTON
const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
console.log(buttons);
console.log(h1s);

/* CAN DO THIS PUT WE CAN CLEAN UP OUR CODE AND DRY
for(let button of buttons){
  button.addEventListener('click', () => {
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
  })
}



for(let h1 of h1s){
  h1.addEventListener('click', () => {
    h1.style.backgroundColor = makeRandColor();
    h1.style.color = makeRandColor();
  })
}
*/

for(let button of buttons){
  button.addEventListener('click', colorize)
}

for(let h1 of h1s){
  h1.addEventListener('click', colorize)
}

//USE KEYWORD THIS TO MAKE USABLE FUNCTION FOR BOTH ELEMENTS WE WANT TO CHANGE
function colorize(){
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
  console.log(this)
};