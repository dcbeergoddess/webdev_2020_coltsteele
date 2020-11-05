console.log('**********************')
console.log('THE EVENT OBJECT')
console.log('**********************')

//can pass parameter in function, usually event or e, gives access to event object constructed for us that contains information about the event!!!
document.querySelector('button').addEventListener('click', (e) => {
  console.log(e)
})

const input = document.querySelector('input')

//use event object to know what key was pressed
input.addEventListener('keydown', (e) => {
  //can use either of these to access what was typed
  console.log(e.key)
  console.log(e.code)//location on keyboard, code will always be the position

})

input.addEventListener('keyup', () => {
  console.log("KEYUP")
})


//USEFUL IF YOU ARE MAKING A GAME, 
window.addEventListener('keydown', (e) => {
  //could use if statements, but these are switch statements
  switch(e.code){
    case 'ArrowUp':
      console.log("UP!");
      break;
    case 'ArrowDown':
      console.log("DOWN!");
      break;
    case 'ArrowRight':
      console.log("RIGHT");
      break;
    case 'ArrowLeft':
      console.log("LEFT")
      break;
    default: 
      console.log("IGNORED!")
  }
})





