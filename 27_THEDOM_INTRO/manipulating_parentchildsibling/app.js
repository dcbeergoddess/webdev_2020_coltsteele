////////////////////
////////PARENT//////
////////////////////
const firstBold = document.querySelector('b');
console.log(firstBold)
//access it's parent element and above
console.log('********************')
console.log('parent element')
console.log('********************')
console.log(firstBold.parentElement)
console.log('********************')
console.log('parent element of parent element')
console.log('********************')
console.log(firstBold.parentElement.parentElement)
console.log('********************')
console.log('3 levels up/root html element')
console.log('********************')
console.log(firstBold.parentElement.parentElement.parentElement)

//////////////////////
////////CHILDREN//////
//////////////////////
const paragraph = firstBold.parentElement
console.log('********************')
console.log('Working with parent Element of first bold and children elements')
console.log('********************')
console.log('paragraph.children (HTML collections)')
console.log('********************')
console.log(paragraph.children)
console.log('********************')
console.log('first child, paragraph.child[0]')
console.log('********************')
console.log(paragraph.children[0]) //returns object


///////////////////////////
////SIBLINGS///////////////
//////////////////////////
console.log('********************')
console.log('Working with Siblings')
console.log('********************')

//GRAB FIRST SQUARE IMAGE
const squareImg = document.querySelector('.square');
console.log(squareImg)
console.log('********************')
console.log('Parent Element of first Image/No Children')
console.log('********************')
console.log(squareImg.parentElement)
console.log(squareImg.children)
console.log('********************')
console.log('previousElementSibling')
console.log('********************')
console.log(squareImg.previousElementSibling) //paragraph
console.log('********************')
console.log('previousSibling')
console.log('********************')
console.log(squareImg.previousSibling)
console.log('********************')
console.log('nextElementSibling')
console.log('********************')
console.log(squareImg.nextElementSibling) //next image
console.log('********************')
console.log('nextSibling')
console.log('********************')
console.log(squareImg.nextSibling) 

///////////////////////////
////APPEND///////////////
//////////////////////////
console.log('********************')
console.log('append & appendChild')
console.log('********************')


console.log('********************')
console.log('createElement | img')
console.log('********************')
const newImg = document.createElement('img')
console.dir(newImg)

console.log('********************')
console.log('update newImg.src')
console.log('********************')
newImg.src = "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
console.log(newImg.src)

console.log('********************')
console.log('first way to append img | appendChild')
console.log('document.body.appendChild(newImg)')
console.log('********************')
console.log(document.body.appendChild(newImg))

console.log('********************')
console.log('add square class to img to make smaller')
console.log('newImg.classlist.add("square")')
console.log('********************')
newImg.classList.add('square');

console.log('********************')
console.log('make h3 and append at end')
console.log("const newH3 = document.createElement('h3')")
console.log("newH3.innerText = 'write it here'")
console.log("document.body.appendChild(newH3")
console.log('********************')
const newH3 = document.createElement('h3');
newH3.innerText = 'I AM NEW'
document.body.appendChild(newH3)

console.log('********************')
console.log('plain old append - newer')
console.log('select paragraph and append new text')
console.log('********************')
const p = document.querySelector('p')
p.append('I am new Text!!! YAY!!!!!!')
console.log(p)

console.log('********************')
console.log('prepend - insert as first child')
console.log('create new bold element')
console.log('prepend to paragraph')
console.log('********************')
const newB = document.createElement('b')
newB.append('HI')
p.prepend(newB)
console.log(newB);

console.log('********************')
console.log('insert an H2 to be adjacent betwwen H1 and image')
console.log('insertAdjacentElement()')
console.log('********************')
const h2 = document.createElement('h2')
h2.append('Are adorable chickens')
//select h1
const h1 = document.querySelector('h1')
//insert after end, after the target element ends
console.log('********************')
console.log('h1.insertAdjacentElement("afterend", h2)')
console.log('********************')
console.log(h2)
h1.insertAdjacentElement('afterend', h2);

console.log('********************')
console.log('after - insert an h3 after h1')
console.log('********************')
const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
console.log(h3)
h1.after(h3);











