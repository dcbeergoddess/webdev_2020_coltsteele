//querySelector//
//=============//

const firstParagraph = document.querySelector('p');
console.dir(firstParagraph)

const bannerIdImage = document.querySelector('#banner');
console.dir(bannerIdImage);

const firstSquareClassImg = document.querySelector('.square');
console.dir(firstSquareClassImg)

const secondImage = document.querySelector('img:nth-of-type(2)');
console.dir(secondImage);

//Anchor tag with title attribute of Java
const java = document.querySelector('a[title="Java"]');
console.dir(java);

//================//
//querySelectorAll//
//================//

const allParagraphs = document.querySelectorAll('p');
console.dir(allParagraphs);

//all anchor tags nested inside of paragraphs
const links = document.querySelectorAll('p a');
console.dir(links)

for(let link of links){
  console.log(link.href)
}