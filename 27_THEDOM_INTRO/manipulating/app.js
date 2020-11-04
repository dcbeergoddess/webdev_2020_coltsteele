//DOM MANIPULATION

//select h1, returns an object, save to variable
const h1 = document.querySelector('h1');
console.log(h1) //<h1>Silkie Chickens<h1>
console.dir(h1) //OBJECT and PROPERTIES

//find properties: innerText, inner HTML, textContent (all show "Silkie Chickens")
// all have to with the stuff inside of an element


const firstP = document.querySelector('p')
console.dir(firstP)

//innerText | won't display any hidden elements
console.log('****innerText OF FIRST PARAGRAPH****')
console.log(firstP.innerText); 

//textContent | will give us everything in code and format of Markup in code editor 
console.log('****textcontent OF FIRST PARAGRAPH****')
console.log(firstP.textContent); 

////////////////////////////

const allLinks = document.querySelectorAll('a')

for(let link of allLinks){
    link.innerText = "I AM A LINK!!!!"
    //will override any bold text, etc
}

//innerHTML - more useful when updating contents rather than retrieving them
console.log('******innerHTML of FIRST PARAGRAPH*********')
console.log(firstP.innerHTML)

//ATTRIBUTES
const firstLink = document.querySelector('a') 
console.log('******firstLink.href | access property from element straigt from JAVASCRIPT Object**********'
);
console.log(firstLink.href);

console.log('*****firstLink.getAttribute("href") / directly from HTML*****'
);
console.log(firstLink.getAttribute('href'));

//SET ATTRIBUTE
console.log('*****changed firstLink.href to google useing setAttribute*****'
);
firstLink.setAttribute('href', 'http://www.google.com');
console.log(firstLink.href);

firstLink.innerText = "I am Google";

//SELECT INPUT WITH TYPE=TEXT
const input = document.querySelector('input[type="text"]');
console.log(input.type);

console.log('*****change input.type to color*****'
);
input.type = 'color';
console.log(input.type)

console.log('*****change input.setAttribute("type", "text") to text again*****'
);
input.setAttribute('type', 'text');
console.log(input.type);

//CHANGING STYLES USING PROPERTIES OF THE OBJECT
h1.style.color = 'green';
h1.style.fontSize = '3em'
h1.style.border = '2px solid pink'

//NOT A GREAT IDEA BUT IT DOES WORK! LOL!
for(let link of allLinks){
    link.style.color = 'rgb(0, 123, 123)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

//GET THE STYLE OF THE ELEMENT
console.log(window.getComputedStyle(h1))
console.log(window.getComputedStyle(h1).color)
console.log(window.getComputedStyle(h1).fontSize) //need to change to number and then turn into string and get px or set px again since it comes back as a string "32px"
console.log(window.getComputedStyle(h1).margin)




















