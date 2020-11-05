console.log('********************')
console.log('ADD EVENT LISTENER')
console.log('********************')

//onclick property
const btn = document.querySelector('#v2');
//set property on click to function

btn.onclick = function(){
  console.log('you clicked me')
  console.log('I hope it worked')
}

//onmouseenter
function scream(){
  console.log('AAAAAHHHHHHHH')
  console.log('STOP TOUCHING ME!')
}
//NOT EXECUTING FUNCTION | SET PROPERTY TO EXECUTE FUNCTION
btn.onmouseenter = scream;

//have to wrap alert in function so alert does not execute right away
document.querySelector('h1').onclick = () => {
  alert('you clicked the h1')
}


///addEventListener
const btn3 = document.querySelector('#v3')
console.log(btn3)

//what you want to listen for and then function to run code if event happens
btn3.addEventListener('dblclick', () => {
  alert("clicked")
})

console.log('********************')
console.log('double click v3')
console.log('********************')

btn3.addEventListener('mouseup', () => {
  console.log("mouse not held down anymore")
})

function twist(){
  console.log("TWIST!")
}

function shout(){
  console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

//TWIST GETS OVERWRITTEN HERE, CAN:T HAVE TWO CALLBACKS FOR THIS APPROACH
tasButton.onclick = twist; 
tasButton.onclick = shout;

const tasButtonV2 = document.querySelector('#tasV2')

//THIS WILL GIVE YOU BOTH FUNCTIONS!!!
//other options for addEventListener, run twist only the first time you click with `once` and then removes the eventListener
tasButtonV2.addEventListener('click', twist, {once: true});
tasButtonV2.addEventListener('click', shout);













