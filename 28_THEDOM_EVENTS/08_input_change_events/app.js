const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', (e) => {
  console.log("change event")
  //will appear only after you leave the input and it was different from what was in the input after you leave
})

input.addEventListener('input', (e) => {
  //LIVE PREVIEW OF TEXT 
  h1.innerText = input.value 
  // console.log("input event")
  // console.log(e)
})