// WE WANT THIS TO MAKE FOLDER WITH BLANK FILES 
//index.html
//style.css
//app.js
// `node boilerplate.js Project`
////===================================================================////
const fs = require('fs')
// console.log(fs); 
const folderName = process.argv[2] || 'Project' //INDEX IN COMMAND LINE `node boilerplate.js folderName`

//=========ASYNCHRONOUS VERSION=============//
/*
fs.mkdir('Dogs', { recursive: true }, (err) => {
  console.log("IN THE CALL BACK")
  if (err) throw err;
}); 
*/

//===========SYNCHRONOUS VERSION=========//
// Write Data to/Make File
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`)
  fs.writeFileSync(`${folderName}/style.css`)
  fs.writeFileSync(`${folderName}/app.js`)
} catch(e) {
  console.log("ERROR!!! ")
  console.log(e)
}

console.log("I COME AFTER MKDIR");