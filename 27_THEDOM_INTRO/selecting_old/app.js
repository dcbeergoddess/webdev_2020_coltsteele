//getElementById

const banner = document.getElementById('banner');
console.dir(banner);

const toc = document.getElementById('toc');
console.dir(toc);

//getElementsByTagName
//getElementsByClassName
const allImages = document.getElementsByTagName('img');
console.dir(allImages[2]);
//returns HTML Collection (not an array) but uses array syntax like indices and iterate over collection using for 

for(let img of allImages){
  console.log(img.src)
}

const squareImages = document.getElementsByClassName('square');
console.dir(squareImages)

for(let img of squareImages){
  console.log(img.src)
}



