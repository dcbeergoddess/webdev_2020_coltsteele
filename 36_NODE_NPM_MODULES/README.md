# Exploring Modules & The NPM Universe

## Crucial 

### * Module.Exports
### * Requiring Modules
### * Using NPM | Node Package Manager
### * Installing Packages
### * Creating Package.json Files

<br>

## Nice to Have

### * The Dad Jokes Package
### * Rainbow Package
### * The Figlet Package
### * Franc Package

<br>

## Notes

<hr>

### Requiring Files
- Other peoples code you can use in your own 
```js
// app.js wants to use functions in math.js
const math = require('./math')
console.log(math) //EMPTY OBJECT IF YOU DON'T EXPORT IN math.js

//OR DESTRUCT AND REQUIRE ONLY FUNCTION YOU WANT
const { PI, square } = require(`./math`)


//math.js
const add = (x,y) => x + y;
const PI = 3.14159;
const square = x => x * x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
```

- quick reference to `module.exports.` = `exports.`

- `index.js` - main file - when require directory that is what node looks for

### NPM - NODE PACKAGE MANAGER
1. A library of thousands of packages published by other developers that we can use for free!
2. A command line tool to easily install and manage those packages in our Node projects