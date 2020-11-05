console.log('********************')
console.log('FIRST BUTTON INLINE')
console.log('********************')

const firstButton = document.querySelector('button');
console.dir(firstButton);
console.dir(firstButton.onclick)


console.log('********************')
console.log('onclick property - select elements')
console.log('********************')
const btn = document.querySelector('#v2');
console.dir(btn)
//set property on click to function

btn.onclick = function(){
  console.log('you clicked me')
  console.log('I hope it worked')
}
console.log(btn.onclick)

console.log('********************')
console.log('onmouseenter')
console.log('********************')

function scream(){
  console.log('AAAAAHHHHHHHH')
  console.log('STOP TOUCHING ME!')
}
//NOT EXECUTING FUNCTION | SET PROPERTY TO EXECUTE FUNCTION
btn.onmouseenter = scream;

console.log('********************')
console.log(' onclick event on h1')
console.log('********************')
//have to wrap alert in function so alert does not execute right away
document.querySelector('h1').onclick = () => {
  alert('you clicked the h1')
}

