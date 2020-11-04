console.log('********************')
console.log('REMOVE ELEMENTS')
console.log('********************')

console.log('********************')
console.log('removeChild')
console.log('remove firstLi')
console.log('********************')
const firstLi = document.querySelector('li')
console.log(firstLi);
console.log('********************')
console.log('firstLi.parentElement')
console.log('ul.removeChild(firstLi)')
console.log('********************')
//GET PARENT OF LI
const ul = firstLi.parentElement
console.log(ul);
ul.removeChild(firstLi)

console.log('********************')
console.log('more sytax, can short code')
console.log('remove first b element with removeChild')
console.log('b.parentElement.removeChild(b)')
console.log('********************')
const b = document.querySelector('b');
console.log(b)
b.parentElement.removeChild(b)

console.log('********************')
console.log('remove')
console.log('remove the first img')
console.log('********************')
const img = document.querySelector('img');
console.log(img)
img.remove()

