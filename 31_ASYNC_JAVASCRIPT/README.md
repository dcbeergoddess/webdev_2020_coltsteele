# ASYNC JAVASCRIPT

## Crucial 

### * Working with Promises
### * Async Functions

<br>

## Important 

### * The Call Stack
### * Callback Hell


<br>

## Nice to Have

### * Understanding WebAPI's
### * Creating Our own Promises


<br>

## Notes

<hr>

## The Call Stack
**mechanism JavaScript uses behind the scenes**

- The mechanism the JS interpreter uses to keep track of its place in a scrip that calls multiple functions.
- How JS "knows" what function is currently being run and what functions are called from withing that function, etc.
- Think of it as marking your place in a book when you flip back to an appendix, etc.

#### **STACK**
- Data Structure 
- arrays
- push, pop, shift, unshift

- A Stack is a basic data structure in computer science
- A LAST IN... FIRST OUT
- LIFO - Data Structure - Remove the thing that was added most recently first

#### **HOW IT WORKS**
- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out that function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

```js
// WITHOUT ARROW FUNCTIONS

  function multiply(x, y) {
    return x * y;
  }
  function square(x) {
    return multiply(x, x);
  }
  function isRightTriangle(3, 4, 5) {
    return square(a) * square(b) === square(c);
  } 
// WITH ARROW FUNCTIONS
  const multiply = (x, y) => x * y;
  
  const square = (x) => multiply(x, x);

  const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
  };

  isRightTriangle(3, 4, 5)

  //isRightTriangle(3,4,5)
  //square(3) + square(4) 
  //=== square(5)
```
- Above isRightTriangle is calling square and square calls multiply
- Stacked on top of each other
- once it is evaluated it is removed from stack
- then it goes back up again and repeats for all squares
- now you have all the numbers and final math can happen

- JavaScript adds Function Calls to the CallStack and removes them whenever a value is returned.

- [LOUPE Call Stack Visual](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!)

- USING THE `CHROME DEV TOOLS` OPEN UP callstack Exercise and look under `SOURCES`, under page look under app.js, Apply breakpoint by clicking line, stops the codes execution and inspect one variable at a time.
- `DEBUGGER` for Call Stack - Add Breakpoint and then use arrows to watch, and play with values in console. 

## WebAPIs and Single Threaded
**JS is Single Threaded**
- At any given point in time, that single JS thread is running at most one line of JS code.
- Call switch back and forth really quickly

- Hello Movie API, send me all movies that match the the query "BAT"
  - THIS CAN TAKE A LONG TIME 
  - WHAT HAPPENS IN BETWEEN THAT TIME SINCE JS CAN ONLY RUN ONE LINE AT A TIME

**EXAMPLE**
```js
  const newTodo = input.value; //get user input
  saveToDatabase(newTodo); //this could take a while!
  input.value = ''; //reset form
```
**WORKAROUND**
```js
  console.log('I print first');
  setTimeout(() => {
    console.log('I print after 3 seconds');
  }, 3000);
  console.log('I print second!');
  //CALLBACKS????
```
- remember `setTimeout` - pass in function
- THE BROWSER DOES THE WORK!!!!!
  - The browser itself is not written in JS, usually in C++, etc. that can do more than JS 
  - JS hands off certain tasks to browser to take care of
  - WebAPIs are methods we can call from JS

### WebAPIs, Browsers, & JS
- Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
- The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
- Once the browser finishes those tasks, they return and are pushed onto the stack as a callback

## Callback Hell :(
  - Promises and Async JS help fix callback hell 
  - THIS IS A COMMON 
```js
  //Look at Rainbow exercise
  //Example of putting in call back function that won't execute until request is done

  searchMovieAPI('amadeus', () => {
    // STANDARD TO HAVE SUCCESS AND FAIL CALLBACK
    saveToMyDB(movies, () => {
      //if it works, run this:
    }, () => {
      //if it doesn't work, run this:
    })
  }, () => {
    //If API is down, or request failed
  });
```
## Promises
- A `promise` is an object representing the eventual completion or failure of an `asynchronous operation`
- CallBack Hell when nesting requests and connection timeout fails with error handling
- HANDLE ERRORS
- PROMISES --- Help nested, hideous code --- NEW - No Internet Explorer
- [MDN Promise Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- If you are a good boy, then you can have candy
- [SAMPLE Chained Promises](04_promises/PromisesIntro/app.js) || `.then` && `.catch` || Pass in value, `data` or `err` to print out response
### Creating Promises
- [Code Ref](04_promises/CreatingPromises/app.js)
```js
  // Make NEW PROMISE ==> Pass in Function (2 params, res and err)

new Promise((resolve, reject) => {
  // pending until resolve or reject is called

});
```
- Creating new Promises | Pass in `function` where are there are 2 `params`, 1: function to `resolve` promise 2: function to `reject` it 

## ASYNC FUNCTIONS
- Syntax Improvement
- newer && cleaner syntax for working with async code! Syntax "makeup" for promises
- `Syntactical Sugar` 
### `ASYNC` and `AWAIT`
- 2 Pieces - Keywords
- will see major uses in making requests and ajax
* `async` | Functions always return a promise | IF function returns a value, promise resolved with that value | IF function throws an exceptions, the promise will be rejected
```js
// EXAMPLE:

async function hello() {
  return 'Hey Guy!';
}
hello();
// Promise {<resolved>: "Hey Guy!"}
async function uhOh() {
  throw new Error('oh no!');
}
uhOh();
// Promise (<rejected>: Error: "oh no!")
```







