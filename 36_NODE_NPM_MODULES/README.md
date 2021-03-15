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
2. A command line tool to easily install and manage those packages in our `Node` projects
- [NPM DOCS & SITE](https://docs.npmjs.com/NPM)
- FIRST: `npm init`
- i.e: `npm install --save give-me-a-joke` | `node_modules` | `package-lock.json` = contents of node module directory

- INSTALL PACKAGE GLOBALLY
- `npm install -g cowsay`
- CHANGE OWNERSHIP PERMISSIONS: `sudo chown -R $USER /usr/local/lib/node_modules`
- `npm link cowsay` - link and require in file now that it's global

### PACKAGE.JSON
- contain metadata about package - `dependencies`
- run `npm init` in terminal
- creates `package.json`
- `npm install`: in directory with package.json

### Language Activity
- Franc
- Langs: CODE FOR LANGUAGES: ISO - process.argv[2] - get that language then pass it to FRANC - out of object - `langs.where("3", "language code")
- error handling 
- Colors



