
const h2 = document.querySelector('h2');

/*
console.log(h2.getAttribute('class'));
//returns null
console.log(h2.setAttribute('class', 'purple'))
*/


//BETTER WAY TO WORK WITH CLASSES | ABOVE WILL TAKE AWAY ANY CLASSES THAT EXIST
//classList
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('border')
console.log(h2.classList.contains('border'))
