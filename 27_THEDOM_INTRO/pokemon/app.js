//Sprites LINK
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
//will be create code to use the number and change it and append to page!!!

//created container div in html to append to
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//create newImg with URL - move to base URL and then inside of loop
// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
// container.appendChild(newImg)

//create SPAN to append the number to the img - first create new div for each pokemon to append 

//write loop to replace the number and make the source DYNAMIC
for(let i = 1; i <= 151; i++){
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon')
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png` //string temperate literal

  pokemon.appendChild(newImg)
  pokemon.appendChild(label)
  container.appendChild(pokemon)
}




