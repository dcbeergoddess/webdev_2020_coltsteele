# SECTION

## Crucial 

### * INSTALLATION
### * The Node REPL
### * Running Node Files

<br>

## Important 

### * Process

<br>

## Nice to Have

### * argv
### * File System Module

<br>

## Notes

<hr>

### NODE.JS
- A JAVASCRIPT RUNTIME 
- Executes Code OUTSIDE of the Browser
- Use Same JS Syntax to write server-side code, instead of relying on other languages like `Python` or `Ruby`
- Growing Popularity - Considered JavaScript
- Web Servers | Command Line Tools | Native Apps (i.e VSCode) | Video Games (CROSS CODE) | Drone Software | AND MORE!!!
- [ELECTRON - NATIVE APPS AND BROWSER](https://www.electronjs.org/)
- **NODE REPL** - Read Evaluate Print Loop - Terminal Shell - Listen and Waits
- [NODE.JS DOCS](https://nodejs.org/en/docs/)
- [PROCESS](https://nodejs.org/docs/latest-v12.x/api/process.html)

### proccess.argv
- PATH to current file

### File System Module
- fs : methods to read, create, update, etc to files
```js
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});
```

```js
const fs = require('fs')
const folderName = process.argv[2] || 'Project' //INDEX IN COMMAND LINE `node boilerplate.js folderName`

//=========ASYNCHRONOUS VERSION=============//

fs.mkdir('Dogs', { recursive: true }, (err) => {
  console.log("IN THE CALL BACK")
  if (err) throw err;
}); 

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
```